nomoretable.js
==============

jQuery script for Responsive Tables like the one from http://css-tricks.com/responsive-data-tables/


What you will need
==================
1. jQuery included before this plugin

2. You need a Table with the following structure:

`<table class="anyClassName">`<br>
`<thead>`<br>
		`<th>First Column</th>`<br>
		`<th>Second Column</th>`<br>
		`<th>Third Column</th>`<br>
	`</thead>`<br>
	`<tbody>`<br>
	`	<tr>`<br>
	`		<td>Field 1,1</td>`<br>
	`		<td>Field 1,2</td>`<br>
	`		<td>Field 1,3</td>`<br>
	`	</tr>`<br>
	`	<tr>`<br>
	`		<td>Field 2,1</td>`<br>
	`		<td>Field 2,2</td>`<br>
	`		<td>Field 2,3</td>`<br>
	`	</tr>`<br>
	`</tbody>`<br>
`</table>`
`
<table class="anyClassName">
	<thead>
		<th>First Column</th>
		<th>Second Column</th>
		<th>Third Column</th>
	</thead>
	<tbody>
		<tr>
			<td>Field 1,1</td>
			<td>Field 1,2</td>
			<td>Field 1,3</td>
		</tr>
		<tr>
			<td>Field 2,1</td>
			<td>Field 2,2</td>
			<td>Field 2,3</td>
		</tr>
	</tbody>
</table>
Default use
==========

$("body").nomoretable({"tableclass":"table", "maxwidth":700, "customcss": 0});
Changes all tables in body after a breakpoint of 700px is reached and using default style from script (overwrites your styling options on class "nomoretable" if you should have any).

Example
=========
$("body").nomoretable({"tableclass":".myTables", "maxwidth":400, "customcss": 1});

All tables in "body" with the class "myTables" will automatic become "nomoretables", when the
width of the target device is smaller then 400px. Also i don't want to use the default styling, because I have a custom one (customcss:1).
