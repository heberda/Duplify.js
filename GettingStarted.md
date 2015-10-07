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
