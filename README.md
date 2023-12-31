# node-file-manager

## Description

The task is to implement File Manager using Node.js APIs. [Description](https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/file-manager/assignment.md).

The file manager should be able to do the following:

- Work using CLI
- Perform basic file operations (copy, move, delete, rename, etc.)
- Utilize Streams API
- Get information about the host machine operating system
- Perform hash calculations
- Compress and decompress files

## Commands

To start an app

```bash
npm run start
```

To start an app with a username

```bash
npm run start -- --username=your_username
```

Exit an app

```bash
.exit
```

Go upper from the current directory

```bash
up
```

Go to the dedicated folder from the current directory

```bash
cd path_to_directory
```

Print in the console the list of all files and folders in the current directory

```bash
ls
```

Read the file and print its content in the console

```bash
cat path_to_file
```

Create an empty file in the current working directory

```bash
add new_file_name
```

Rename a file:

```bash
rn path_to_file new_filename
```

Copy a file

```bash
cp path_to_file path_to_new_directory
```

Move a file (the initial file will be deleted)

```bash
mv path_to_file path_to_new_directory
```

Delete a file

```bash
rm path_to_file
```

Print operating system info:

- Get EOL (default system End-Of-Line) and print it to the console

```bash
os --EOL
```

- Get host machine CPUs info (overall amount of CPUS plus model and clock rate (in GHz) for each of them) and print it to the console

```bash
os --cpus
```

- Get the home directory and print it to console

```bash
os --homedir
```

- Get the current _system user name_

```bash
os --username
```

- Get CPU architecture

```bash
os --architecture
```

Calculate the hash for a file and print it into the console

```bash
hash path_to_file
```

Compress a file (using the Brotli algorithm)

```bash
compress path_to_file path_to_destination
```

Decompress a file (using the Brotli algorithm)

```bash
decompress path_to_file path_to_destination
```
