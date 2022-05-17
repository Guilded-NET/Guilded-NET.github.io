---
title: CanConvertFrom(ITypeDescriptorContext, Type)
layout: references
section: references
tags:
  - references
  - method
description: "

Whether the type can be converted to [FormId](FormId 'Guilded.Base.FormId')."
---

## FormIdConverter.CanConvertFrom(ITypeDescriptorContext, Type) Method
##### **Assembly:** `Guilded.Base`<br/>**Type:** [`FormIdConverter`](FormIdConverter 'Guilded.Base.FormIdConverter')

Whether the type can be converted to [FormId](FormId 'Guilded.Base.FormId').

```csharp
public override bool CanConvertFrom(ITypeDescriptorContext? context, System.Type sourceType);
```
#### Parameters

<a name='Guilded.Base.FormIdConverter.CanConvertFrom(ITypeDescriptorContext,System.Type).context'></a>

`context` [System.ComponentModel.ITypeDescriptorContext](https://docs.microsoft.com/en-us/dotnet/api/System.ComponentModel.ITypeDescriptorContext 'System.ComponentModel.ITypeDescriptorContext')

The descriptor context for converter

<a name='Guilded.Base.FormIdConverter.CanConvertFrom(ITypeDescriptorContext,System.Type).sourceType'></a>

`sourceType` [System.Type](https://docs.microsoft.com/en-us/dotnet/api/System.Type 'System.Type')

The type found in the source

#### Returns
[System.Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean 'System.Boolean')  
Can convert