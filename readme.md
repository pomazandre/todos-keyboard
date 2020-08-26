Exercise:
1. Write a virtual keyboard component or module which you can reuse.
With a virtual keyboard you can type with the mouse.
3. Allactions which you are typing on a physical keyboard should be highlighted on your virtual
keyboard includes combinations such as Shift + Alt, Ctrl + Enter, etc
4. Virtual keyboard should support several languages (Russian and English will be enough) and we
should have a possibility to change our keyboard layout. That means when we press Ctrl + Shift /
Shift + Alt / Win + Space it should switch from one language to another.
5. Create an additional ToDo module where you will display a list of all todo elements and will have a
possibility to add a new todo element with some circumstances:
a. Type into an input element via your virtual keyboard
b. After the Enter key is pressed add a todo element to the list of all your todoes.
c. Have a possibility to focus or active any todo element from a list by arrow keys: t, |, —, >
(Home, End, Page Up, Page Down are optional).
dd. Remove a focused todo element by Backspace or Delete keys.
e Add validation rules on input before creating a new todo element: value shouldn't be empty,
should have length less than 20 characters and shouldn't contain special keyboard keys.

Pre start:
1. Create a github / bitbucket / etc repository and provide a link.
2. Estimate each task of the project in hours before start it and provide estimated time for instance
you can do it via google spreadsheets and send us a link or attach it in your created repository.
3. After finishing all tasks provide us elapsed time for each task, if you spent time on research specify
how much time has been spent such actions you can track in the spreadsheet you've created in
the previous task

Guidelines:
1. Frequent commit history.
2. Use Angular / React / Vue or another popular nowadays JavaScript front-end framework or library
except jQuery.
3. Write your solution in babel / TypeScript (and make it fully typed) or another transpiler.
4. Write html / .css/ js / ts /.* in separate files.
5. Allfiles should be separated by parts (directories) for which they are responsible, a part includes
html /.css/ js/ts/ * files.
6. Prepare all needed npm / grunt / gulp / etc. tasks to run your app /lints / tests / ete
7. Describe in readme file how to start and use your project's tasks.
8. Code should be readable so make sure it is adjusted and easy to read
9. You don't have to spend much time on design stuff but it should be and look usable.
10. Feel free to add comments in the code on possible issues / decisions you had to take.
11. Use eslint/tsiint /Iinters etc.. Make sure that your code without linter errors / warnings.
12. * Bonus - tests. if your app already has tests they should pass.