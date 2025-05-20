---
title: "Test"
excerpt: "Ornare cum cursus laoreet sagittis nunc fusce posuere per euismod dis vehicula a, semper fames lacus maecenas dictumst pulvinar neque enim non potenti. Torquent hac sociosqu eleifend potenti."
publishDate: "2024-05-30T11:39:36.050Z"
image: "../../assets/blog/blog3.avif"
category: "lifestyle"
draft: true
author: "andres-morales"
tags: [scripts]
---

## Ejemplos para poder borrar de manera recursiva en windows y linux
Esto es bastante util porque me encontre en una situacion donde debia
eliminar siempre unos archivos que se descargan, tenian siempre el mismo nombre
y los tenia recursivamente en diferentes carpetas. No pense hacerlo en el momento
de manera programatica pero ya luego cai en cuenta que debia haber alguna manera
para no hacerlo manual y eliminar uno por uno o por seleccion con el mouse.

Asi que aqui dejo scripts que muy amablemente gpt me colaboro a sacar y que son
de mucha ayuda

## PowerShell Script
Antes de irnos a borrar directamente archivos es recomendable primero listarlos para 
evidenciar que se va a estar eliminando y en donde.

Primero declaramos los archivos que queremos eliminar de manera recursiva en powershell:

$fileNamesToDelete = @("test.txt", "readme.txt")

Luego declaramos y asignamos nuestra carpeta principal donde queremos que se eliminen
archivos de manera recursiva:

$targetFolder = "C:\Your\Folder"

Para encontrar la ruta de esta o cualquier carpeta, le podemos dar click derecho a la misma
y darle click a la opcion de Copiar como ruta de acceso.

Imagen de la opcion de copiar como ruta de acceso

Ahora seguimos con el paso de hacerle print a los archivos que queremos eliminar
para evidenciar que en efecto sean los que queremos:

Get-ChildItem -Path $targetFolder -Recurse -File | Where-Object {
$fileNamesToDelete -contains $_.Name
} | Select-Object FullName

Y ya por ultimo queda el paso de la eliminacion:

Get-ChildItem -Path $targetFolder -Recurse -File | Where-Object{
$fileNamesToDelete -contains $_.Name
} | Remove-Item -Force

## Bash Script

find "$root_dir" -type f -name "$filename" -exec echo {} +

#!/bin/bash

# Define array of file names to delete
files_to_delete=("thumbs.db" "desktop.ini" "readme.txt")

# Root directory to start from
root_dir="/path/to/your/folder"

# Traverse and delete
for filename in "${files_to_delete[@]}"; do
    find "$root_dir" -type f -name "$filename" -exec rm -f {} +
done

