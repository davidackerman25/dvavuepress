
# Linux

## nslookup
```
nslookup something.com
```

nameservers lookup

gets the ip address

## directory operations
```
pwd             Show current directory
mkdir dir       Make directory dir
cd dir          Change directory to dir
cd ..           Go up a directory
ls              List files
```
## file operations
```
touch file1         Create file1
cat file1 file2     Concat­enate files and output
less file1          View and paginate file1
file file1          Get type of file1
cp file1 file2      Copy file1 to file2
mv file1 file2      Move file1 to file2
rm file1            Delete file1
head file1          Show first 10 lines of file1
tail file1          Show last 10 lines of file1
tail -F file1       Output last lines of file1 as it changes
```

## file permissions
```
chmod 775 file          Change mode of file to 775
chmod -R 600 folder     Recurs­ively chmod folder to 600
chown user:group file   Change file owner to user and group to group
```

## seach files
```
grep pattern files          Search for pattern in files
grep -i                     Case insens­itive search
grep -r                     Recursive search
grep -v                     Inverted search
grep -o                     Show matched part of file only
find /dir/ -name name*      Find files starting with name in dir
find /dir/ -user name       Find files owned by name in dir
find /dir/ -mmin num        Find files modifed less than num minutes ago in dir
whereis command             Find binary / source / manual for command
locate file                 Find file (quick search of system index)
```

## bash commands
```
uname -a                    Show system and kernel
head -n1 /etc/issue         Show distri­bution
mount                       Show mounted filesy­stems
date                        Show system date
uptime                      Show uptime
whoami                      Show your username
man command                 Show manual for command
```

## bash variables
```
env                     Show enviro­nment variables
echo $NAME              Output value of $NAME variable
export NAME=value       Set $NAME to value
$PATH                   Executable search path
$HOME                   Home directory
$SHELL                  Current shell
```

## bash shortcuts
```
CTRL-c              Stop current command
CTRL-z              Sleep program
CTRL-a              Go to start of line
CTRL-e              Go to end of line
CTRL-u              Cut from start of line
CTRL-k              Cut to end of line
CTRL-r              Search history
!!                  Repeat last command
!abc                Run last command starting with abc
!abc:p              Print last command starting with abc
!$                  Last argument of previous command
ALT-.               Last argument of previous command
!*                  All arguments of previous command
^abc^123            Run previous command, replacing abc with 123

```

## nano shortcuts

```
Files
Ctrl-R            Read file
Ctrl-O            Save file
Ctrl-X            Close file

Cut and Paste               
ALT-A             Start marking text
CTRL-K            Cut marked text or line     
CTRL-U            Paste text

Navigate File
ALT-/             End of file
CTRL-A            Beginning of line
CTRL-E            End of line
CTRL-C            Show line number
CTRL-_            Go to line number

Search File                 
CTRL-W            Find                        
ALT-W             Find next                   
CTRL-\            Search and replace
```