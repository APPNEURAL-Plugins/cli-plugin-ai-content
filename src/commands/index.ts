import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import { Command } from "commander";

type CommandVariant = "prefixed" | "shortcut";

function handleError(error: unknown) {
  const message = error instanceof Error ? error.message : String(error);
  console.error(chalk.red(`[fs] ${message}`));
  process.exitCode = 1;
}

function buildTree(dir: string, prefix = '', isLast = true): string {
  let result = '';
  try {
    const items = fs.readdirSync(dir).sort();
    items.forEach((item, index) => {
      const fullPath = path.join(dir, item);
      const isLastItem = index === items.length - 1;
      const connector = isLastItem ? '└── ' : '├── ';
      const nextPrefix = prefix + (isLastItem ? '    ' : '│   ');
      result += prefix + connector + item + '\n';
      if (fs.statSync(fullPath).isDirectory()) {
        result += buildTree(fullPath, nextPrefix, isLastItem);
      }
    });
  } catch (error) {
    throw new Error(`Failed to read directory: ${dir}`);
  }
  return result;
}

function findFiles(pattern: string, dir: string): string[] {
  const results: string[] = [];
  try {
    const items = fs.readdirSync(dir);
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        results.push(...findFiles(pattern, fullPath));
      } else if (item.includes(pattern)) {
        results.push(fullPath);
      }
    });
  } catch (error) {
    throw new Error(`Failed to search in directory: ${dir}`);
  }
  return results;
}

function registerFsCommand(
  cli: Command,
  prefix: string,
  pattern: string,
  description: string,
  configure: (command: Command, variant: CommandVariant) => void,
) {
  // Register commands directly, ignore prefix
  if (!cli.commands.some(cmd => cmd.name() === pattern.split(' ')[0])) {
    const command = cli.command(pattern);
    command.description(description);
    configure(command, "prefixed");
  }
}

export function registerCommands(cli: Command, options: { prefix: string; plugin: string }) {
  registerFsCommand(
    cli,
    "",
    "tree <path>",
    "Visualize directory structure.",
    (command) => {
      command.action((dirPath: string) => {
        try {
          if (!fs.existsSync(dirPath)) {
            throw new Error(`Path does not exist: ${dirPath}`);
          }
          const stat = fs.statSync(dirPath);
          if (!stat.isDirectory()) {
            throw new Error(`Path is not a directory: ${dirPath}`);
          }
          console.log(chalk.bold(`Directory tree for: ${dirPath}`));
          console.log(buildTree(dirPath));
        } catch (error) {
          handleError(error);
        }
      });
    },
  );

  registerFsCommand(
    cli,
    "",
    "find <pattern> <path>",
    "Search for files matching a pattern.",
    (command) => {
      command.action((pattern: string, dirPath: string) => {
        try {
          if (!fs.existsSync(dirPath)) {
            throw new Error(`Path does not exist: ${dirPath}`);
          }
          const stat = fs.statSync(dirPath);
          if (!stat.isDirectory()) {
            throw new Error(`Path is not a directory: ${dirPath}`);
          }
          const results = findFiles(pattern, dirPath);
          if (results.length === 0) {
            console.log(chalk.yellow(`No files found matching pattern "${pattern}" in ${dirPath}`));
          } else {
            console.log(chalk.bold(`Files matching "${pattern}" in ${dirPath}:`));
            results.forEach(file => console.log(chalk.green(file)));
          }
        } catch (error) {
          handleError(error);
        }
      });
    },
  );

  registerFsCommand(
    cli,
    "",
    "watch <path>",
    "Watch a path for file changes.",
    (command) => {
      command.action((watchPath: string) => {
        try {
          if (!fs.existsSync(watchPath)) {
            throw new Error(`Path does not exist: ${watchPath}`);
          }
          console.log(chalk.bold(`Watching for changes in: ${watchPath}`));
          fs.watch(watchPath, { recursive: true }, (eventType, filename) => {
            if (filename) {
              console.log(`${chalk.blue(eventType)}: ${chalk.green(path.join(watchPath, filename))}`);
            }
          });
        } catch (error) {
          handleError(error);
        }
      });
    },
  );
}
