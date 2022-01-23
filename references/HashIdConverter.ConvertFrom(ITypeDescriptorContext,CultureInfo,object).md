---
title: ConvertFrom(ITypeDescriptorContext, CultureInfo, object)
layout: references
section: references
tags:
  - references
  - method
description: "

Converts string to [HashId](HashId 'Guilded.NET.Base.HashId').

```csharp
public override object ConvertFrom(System.ComponentModel.ITypeDescriptorContext? context, System.Globalization.CultureInfo? culture, object value);
```"
---

## HashIdConverter.ConvertFrom(ITypeDescriptorContext, CultureInfo, object) Method
###### **Assembly:** `Guilded.NET.Base`<br/>**Type:** [`HashIdConverter`](HashIdConverter 'Guilded.NET.Base.HashIdConverter')

Converts string to [HashId](HashId 'Guilded.NET.Base.HashId').

```csharp
public override object ConvertFrom(System.ComponentModel.ITypeDescriptorContext? context, System.Globalization.CultureInfo? culture, object value);
```
#### Parameters

<a name='Guilded.NET.Base.HashIdConverter.ConvertFrom(System.ComponentModel.ITypeDescriptorContext,System.Globalization.CultureInfo,object).context'></a>

`context` [System.ComponentModel.ITypeDescriptorContext](https://docs.microsoft.com/en-us/dotnet/api/System.ComponentModel.ITypeDescriptorContext 'System.ComponentModel.ITypeDescriptorContext')

The descriptor context for converter

<a name='Guilded.NET.Base.HashIdConverter.ConvertFrom(System.ComponentModel.ITypeDescriptorContext,System.Globalization.CultureInfo,object).culture'></a>

`culture` [System.Globalization.CultureInfo](https://docs.microsoft.com/en-us/dotnet/api/System.Globalization.CultureInfo 'System.Globalization.CultureInfo')

The current date localization culture

<a name='Guilded.NET.Base.HashIdConverter.ConvertFrom(System.ComponentModel.ITypeDescriptorContext,System.Globalization.CultureInfo,object).value'></a>

`value` [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object')

The string to convert

#### Returns
[System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object')  
[HashId](HashId 'Guilded.NET.Base.HashId') from string