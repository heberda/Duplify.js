# The Set Up

Let's assume you have `public List<Person> Persons { get; set; }`

It's a common problem in MVC when you just want to post it.

# HTML

Set up table which will home your inputs and headings

```
<table>
  <thead>
    <tr>
      <th>@Html.LabelFor(x => x.Persons.FirstOrDefault().Name)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>@Html.TextBoxFor(x => x.Persons.FirstOrDefault().Name)</td>
    </tr>
  </tbody>
</table>
```

# Now the cherry on top

Be sure to include the `duplify.js` file then...

```
$('table:first').duplify();
```

Now unfortunately in this example that won't work, we forgot to tell it what the list was called, let's try again...

```
$('table:first').duplify({listName: "Persons"});
```

# The Defaults

Options  | Values
------------- | -------------
canRemove:  | defaults to `true`, false will stop users removing a row.
htmlPrefix:  | defaults to `undefined`, this is for the purpose of partial pages
listName: | defaults to `undefined`, this is currently *mandatory*
newItemClass: | defaults to `'link-hover'`, this allows you to add a class to the new button. Useful for creating and adding a hand cursor on hover.
removeItemClass: | defaults to `'link-hover'`, this allows you to add a class to the remove button. Useful for creating and adding a hand cursor on hover.
