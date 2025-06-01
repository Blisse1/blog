---
title: "Borrando archivos de manera recursiva en Windows"
publishDate: "2025-05-31T11:39:36.050Z"
excerpt: "Ornare cum cursus laoreet sagittis nunc fusce posuere per euismod dis vehicula a, semper fames lacus maecenas dictumst pulvinar neque enim non potenti. Torquent hac sociosqu eleifend potenti."
image: "../../assets/1344305.png"
category: "technology"
author: "andres-morales"
tags: [scripts]
---

## Ejemplos para poder borrar de manera recursiva
Esto es bastante útil porque me encontré en una situación donde debía
eliminar siempre unos archivos, tenían siempre el mismo nombre
y los tenía recursivamente en diferentes carpetas. No pensé hacerlo en el momento
de manera programática pero ya luego caí en cuenta que debia haber alguna manera
para no hacerlo manual y eliminar uno por uno o por selección con el mouse.

Así que aqui dejo el script con el que gpt muy amablemente me colaboró, que revisé y que resultó
de mucha ayuda.

## PowerShell Script
Antes de irnos a borrar directamente archivos es recomendable primero listarlos para 
evidenciar qué se va a estar eliminando y en dónde.

Primero declaramos los archivos que queremos eliminar de manera recursiva en PowerShell:

```powershell
$fileNamesToDelete = @("test.txt", "readme.txt")
```

Luego declaramos y asignamos nuestra carpeta principal donde queremos que se eliminen
archivos de manera recursiva:

```powershell
$targetFolder = "C:\Your\Folder"
```

Ahora seguimos con el paso de hacerle print a los archivos que queremos eliminar
para evidenciar que en efecto sean los que queremos.

En PowerShell colocamos:

```powershell
Get-ChildItem -Path $targetFolder -Recurse -File | Where-Object {
$fileNamesToDelete -contains $_.Name
} | Select-Object FullName
```

Y ya por ultimo queda el paso de la eliminación una vez estamos seguros de
que sí sean los que deseamos eliminar:

```powershell
Get-ChildItem -Path $targetFolder -Recurse -File | Where-Object{
$fileNamesToDelete -contains $_.Name
} | Remove-Item -Force
```
