---
title: ConvertFrom(ITypeDescriptorContext, CultureInfo, object)
layout: references
section: references
tags:
  - references
  - method
description: "

Converts string to [FormId](FormId.md 'Guilded.Base.FormId')."
---

## FormIdConverter.ConvertFrom(ITypeDescriptorContext, CultureInfo, object) Method
###### **Assembly:** `Guilded.Base`<br/>**Type:** [`FormIdConverter`](FormIdConverter.md 'Guilded.Base.FormIdConverter')

Converts string to [FormId](FormId.md 'Guilded.Base.FormId').

```csharp
public override object ConvertFrom(ITypeDescriptorContext? context, CultureInfo? culture, object value);
```
#### Parameters

<a name='Guilded.Base.FormIdConverter.ConvertFrom(ITypeDescriptorContext,CultureInfo,object).context'></a>

`context` [System.ComponentModel.ITypeDescriptorContext](https://docs.microsoft.com/en-us/dotnet/api/System.ComponentModel.ITypeDescriptorContext 'System.ComponentModel.ITypeDescriptorContext')

The descriptor context for converter

<a name='Guilded.Base.FormIdConverter.ConvertFrom(ITypeDescriptorContext,CultureInfo,object).culture'></a>

`culture` [System.Globalization.CultureInfo](https://docs.microsoft.com/en-us/dotnet/api/System.Globalization.CultureInfo 'System.Globalization.CultureInfo')

The current date localization culture

<a name='Guilded.Base.FormIdConverter.ConvertFrom(ITypeDescriptorContext,CultureInfo,object).value'></a>

`value` [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object')

The string to convert

#### Returns
[System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object')  
[FormId](FormId.md 'Guilded.Base.FormId') from string