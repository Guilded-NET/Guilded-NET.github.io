---
title: Embed
layout: references
section: references
tags:
  - references
  - class
description: "

A custom content embed that represents any kind of information.

```csharp
public class Embed : Guilded.NET.Base.BaseObject
```"
---

## Embed Class
###### **Assembly:** `Guilded.NET.Base`<br/>**Namespace:** [`Guilded.NET.Base.Embeds`](Guilded.NET.Base.Embeds 'Guilded.NET.Base.Embeds')

A custom content embed that represents any kind of information.

```csharp
public class Embed : Guilded.NET.Base.BaseObject
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') &#129106; Embed

### Remarks
  
Represents a custom/rich embed that represents some kind of information. This is usually used in Webhooks to provide an information about a new post or any event that occurred. It can also be used for displaying results from a bot or used as a content instead of plain Markdown. Embeds may look something like quote blocks, but with more content like fields, footers, etc.

### Example
  
Embeds can be created using constructors, object initializers and fluent interface methods.  
  
This example showcases mixing object initializer along with constructor parameters:  
  
```csharp  
Embed embed = new Embed(thumbnail: imageUrl)  
{  
    Title = "Title here",  
    Description = "Description here"  
};  
```  
  
The example below showcases using fluent interface methods:  
  
```csharp  
Embed embed = new Embed()  
    .SetTitle("Title here")  
    .SetDescription("Description here")  
    .SetFooter("Footer text here");  
```

| Constructors | |
| :--- | :--- |
| [Embed()](Embed.Embed() 'Guilded.NET.Base.Embeds.Embed.Embed()') | Creates a new empty instance of [Embed](Embed 'Guilded.NET.Base.Embeds.Embed'). |
| [Embed(EmbedField[])](Embed.Embed(EmbedField[]) 'Guilded.NET.Base.Embeds.Embed.Embed(Guilded.NET.Base.Embeds.EmbedField[])') | Creates a new instance of [Embed](Embed 'Guilded.NET.Base.Embeds.Embed') with array of fields [fields](Embed.Embed(EmbedField[])#Guilded.NET.Base.Embeds.Embed.Embed(Guilded.NET.Base.Embeds.EmbedField[]).fields 'Guilded.NET.Base.Embeds.Embed.Embed(Guilded.NET.Base.Embeds.EmbedField[]).fields'). |
| [Embed(int, int, int)](Embed.Embed(int,int,int) 'Guilded.NET.Base.Embeds.Embed.Embed(int, int, int)') | Creates a new instance of [Embed](Embed 'Guilded.NET.Base.Embeds.Embed') with channels<br/>[red](Embed.Embed(int,int,int)#Guilded.NET.Base.Embeds.Embed.Embed(int,int,int).red 'Guilded.NET.Base.Embeds.Embed.Embed(int, int, int).red'), [green](Embed.Embed(int,int,int)#Guilded.NET.Base.Embeds.Embed.Embed(int,int,int).green 'Guilded.NET.Base.Embeds.Embed.Embed(int, int, int).green') and [blue](Embed.Embed(int,int,int)#Guilded.NET.Base.Embeds.Embed.Embed(int,int,int).blue 'Guilded.NET.Base.Embeds.Embed.Embed(int, int, int).blue') of [Color](Embed.Color 'Guilded.NET.Base.Embeds.Embed.Color') property. |
| [Embed(int)](Embed.Embed(int) 'Guilded.NET.Base.Embeds.Embed.Embed(int)') | Creates a new instance of [Embed](Embed 'Guilded.NET.Base.Embeds.Embed') with colour [argb](Embed.Embed(int)#Guilded.NET.Base.Embeds.Embed.Embed(int).argb 'Guilded.NET.Base.Embeds.Embed.Embed(int).argb'). |
| [Embed(string, EmbedField[])](Embed.Embed(string,EmbedField[]) 'Guilded.NET.Base.Embeds.Embed.Embed(string, Guilded.NET.Base.Embeds.EmbedField[])') | Creates a new instance of [Embed](Embed 'Guilded.NET.Base.Embeds.Embed') with array of fields [fields](Embed.Embed(string,EmbedField[])#Guilded.NET.Base.Embeds.Embed.Embed(string,Guilded.NET.Base.Embeds.EmbedField[]).fields 'Guilded.NET.Base.Embeds.Embed.Embed(string, Guilded.NET.Base.Embeds.EmbedField[]).fields'). |
| [Embed(string, EmbedMedia)](Embed.Embed(string,EmbedMedia) 'Guilded.NET.Base.Embeds.Embed.Embed(string, Guilded.NET.Base.Embeds.EmbedMedia)') | Creates a new instance of [Embed](Embed 'Guilded.NET.Base.Embeds.Embed') with image [image](Embed.Embed(string,EmbedMedia)#Guilded.NET.Base.Embeds.Embed.Embed(string,Guilded.NET.Base.Embeds.EmbedMedia).image 'Guilded.NET.Base.Embeds.Embed.Embed(string, Guilded.NET.Base.Embeds.EmbedMedia).image'). |
| [Embed(string, string, EmbedField[])](Embed.Embed(string,string,EmbedField[]) 'Guilded.NET.Base.Embeds.Embed.Embed(string, string, Guilded.NET.Base.Embeds.EmbedField[])') | Creates a new instance of [Embed](Embed 'Guilded.NET.Base.Embeds.Embed') with array of fields [fields](Embed.Embed(string,string,EmbedField[])#Guilded.NET.Base.Embeds.Embed.Embed(string,string,Guilded.NET.Base.Embeds.EmbedField[]).fields 'Guilded.NET.Base.Embeds.Embed.Embed(string, string, Guilded.NET.Base.Embeds.EmbedField[]).fields'). |
| [Embed(string, string, EmbedFooter, DateTime)](Embed.Embed(string,string,EmbedFooter,DateTime) 'Guilded.NET.Base.Embeds.Embed.Embed(string, string, Guilded.NET.Base.Embeds.EmbedFooter, System.DateTime)') | Creates a new instance of [Embed](Embed 'Guilded.NET.Base.Embeds.Embed') with footer [footer](Embed.Embed(string,string,EmbedFooter,DateTime)#Guilded.NET.Base.Embeds.Embed.Embed(string,string,Guilded.NET.Base.Embeds.EmbedFooter,System.DateTime).footer 'Guilded.NET.Base.Embeds.Embed.Embed(string, string, Guilded.NET.Base.Embeds.EmbedFooter, System.DateTime).footer') and title [title](Embed.Embed(string,string,EmbedFooter,DateTime)#Guilded.NET.Base.Embeds.Embed.Embed(string,string,Guilded.NET.Base.Embeds.EmbedFooter,System.DateTime).title 'Guilded.NET.Base.Embeds.Embed.Embed(string, string, Guilded.NET.Base.Embeds.EmbedFooter, System.DateTime).title'). |
| [Embed(string, string, EmbedFooter)](Embed.Embed(string,string,EmbedFooter) 'Guilded.NET.Base.Embeds.Embed.Embed(string, string, Guilded.NET.Base.Embeds.EmbedFooter)') | Creates a new instance of [Embed](Embed 'Guilded.NET.Base.Embeds.Embed') with footer [footer](Embed.Embed(string,string,EmbedFooter)#Guilded.NET.Base.Embeds.Embed.Embed(string,string,Guilded.NET.Base.Embeds.EmbedFooter).footer 'Guilded.NET.Base.Embeds.Embed.Embed(string, string, Guilded.NET.Base.Embeds.EmbedFooter).footer') and title [title](Embed.Embed(string,string,EmbedFooter)#Guilded.NET.Base.Embeds.Embed.Embed(string,string,Guilded.NET.Base.Embeds.EmbedFooter).title 'Guilded.NET.Base.Embeds.Embed.Embed(string, string, Guilded.NET.Base.Embeds.EmbedFooter).title'). |
| [Embed(string, string, EmbedMedia)](Embed.Embed(string,string,EmbedMedia) 'Guilded.NET.Base.Embeds.Embed.Embed(string, string, Guilded.NET.Base.Embeds.EmbedMedia)') | Creates a new instance of [Embed](Embed 'Guilded.NET.Base.Embeds.Embed') with image [image](Embed.Embed(string,string,EmbedMedia)#Guilded.NET.Base.Embeds.Embed.Embed(string,string,Guilded.NET.Base.Embeds.EmbedMedia).image 'Guilded.NET.Base.Embeds.Embed.Embed(string, string, Guilded.NET.Base.Embeds.EmbedMedia).image') and title [title](Embed.Embed(string,string,EmbedMedia)#Guilded.NET.Base.Embeds.Embed.Embed(string,string,Guilded.NET.Base.Embeds.EmbedMedia).title 'Guilded.NET.Base.Embeds.Embed.Embed(string, string, Guilded.NET.Base.Embeds.EmbedMedia).title'). |
| [Embed(string, string, string)](Embed.Embed(string,string,string) 'Guilded.NET.Base.Embeds.Embed.Embed(string, string, string)') | Creates a new instance of [Embed](Embed 'Guilded.NET.Base.Embeds.Embed') with footer [footer](Embed.Embed(string,string,string)#Guilded.NET.Base.Embeds.Embed.Embed(string,string,string).footer 'Guilded.NET.Base.Embeds.Embed.Embed(string, string, string).footer') and title [title](Embed.Embed(string,string,string)#Guilded.NET.Base.Embeds.Embed.Embed(string,string,string).title 'Guilded.NET.Base.Embeds.Embed.Embed(string, string, string).title'). |
| [Embed(string, string, IList&lt;EmbedField&gt;)](Embed.Embed(string,string,IList_EmbedField_) 'Guilded.NET.Base.Embeds.Embed.Embed(string, string, System.Collections.Generic.IList<Guilded.NET.Base.Embeds.EmbedField>)') | Creates a new instance of [Embed](Embed 'Guilded.NET.Base.Embeds.Embed') with list of fields [fields](Embed.Embed(string,string,IList_EmbedField_)#Guilded.NET.Base.Embeds.Embed.Embed(string,string,System.Collections.Generic.IList_Guilded.NET.Base.Embeds.EmbedField_).fields 'Guilded.NET.Base.Embeds.Embed.Embed(string, string, System.Collections.Generic.IList<Guilded.NET.Base.Embeds.EmbedField>).fields'). |
| [Embed(string, string, Uri)](Embed.Embed(string,string,Uri) 'Guilded.NET.Base.Embeds.Embed.Embed(string, string, System.Uri)') | Creates a new instance of [Embed](Embed 'Guilded.NET.Base.Embeds.Embed') with image [image](Embed.Embed(string,string,Uri)#Guilded.NET.Base.Embeds.Embed.Embed(string,string,System.Uri).image 'Guilded.NET.Base.Embeds.Embed.Embed(string, string, System.Uri).image') and title [title](Embed.Embed(string,string,Uri)#Guilded.NET.Base.Embeds.Embed.Embed(string,string,System.Uri).title 'Guilded.NET.Base.Embeds.Embed.Embed(string, string, System.Uri).title'). |
| [Embed(string, string)](Embed.Embed(string,string) 'Guilded.NET.Base.Embeds.Embed.Embed(string, string)') | Creates a new instance of [Embed](Embed 'Guilded.NET.Base.Embeds.Embed') with title [title](Embed.Embed(string,string)#Guilded.NET.Base.Embeds.Embed.Embed(string,string).title 'Guilded.NET.Base.Embeds.Embed.Embed(string, string).title'). |
| [Embed(string, IList&lt;EmbedField&gt;)](Embed.Embed(string,IList_EmbedField_) 'Guilded.NET.Base.Embeds.Embed.Embed(string, System.Collections.Generic.IList<Guilded.NET.Base.Embeds.EmbedField>)') | Creates a new instance of [Embed](Embed 'Guilded.NET.Base.Embeds.Embed') with list of fields [fields](Embed.Embed(string,IList_EmbedField_)#Guilded.NET.Base.Embeds.Embed.Embed(string,System.Collections.Generic.IList_Guilded.NET.Base.Embeds.EmbedField_).fields 'Guilded.NET.Base.Embeds.Embed.Embed(string, System.Collections.Generic.IList<Guilded.NET.Base.Embeds.EmbedField>).fields'). |
| [Embed(string, Uri, string, EmbedFooter, DateTime)](Embed.Embed(string,Uri,string,EmbedFooter,DateTime) 'Guilded.NET.Base.Embeds.Embed.Embed(string, System.Uri, string, Guilded.NET.Base.Embeds.EmbedFooter, System.DateTime)') | Creates a new instance of [Embed](Embed 'Guilded.NET.Base.Embeds.Embed') with footer [footer](Embed.Embed(string,Uri,string,EmbedFooter,DateTime)#Guilded.NET.Base.Embeds.Embed.Embed(string,System.Uri,string,Guilded.NET.Base.Embeds.EmbedFooter,System.DateTime).footer 'Guilded.NET.Base.Embeds.Embed.Embed(string, System.Uri, string, Guilded.NET.Base.Embeds.EmbedFooter, System.DateTime).footer') and title [title](Embed.Embed(string,Uri,string,EmbedFooter,DateTime)#Guilded.NET.Base.Embeds.Embed.Embed(string,System.Uri,string,Guilded.NET.Base.Embeds.EmbedFooter,System.DateTime).title 'Guilded.NET.Base.Embeds.Embed.Embed(string, System.Uri, string, Guilded.NET.Base.Embeds.EmbedFooter, System.DateTime).title'). |
| [Embed(string, Uri, string, EmbedFooter)](Embed.Embed(string,Uri,string,EmbedFooter) 'Guilded.NET.Base.Embeds.Embed.Embed(string, System.Uri, string, Guilded.NET.Base.Embeds.EmbedFooter)') | Creates a new instance of [Embed](Embed 'Guilded.NET.Base.Embeds.Embed') with footer [footer](Embed.Embed(string,Uri,string,EmbedFooter)#Guilded.NET.Base.Embeds.Embed.Embed(string,System.Uri,string,Guilded.NET.Base.Embeds.EmbedFooter).footer 'Guilded.NET.Base.Embeds.Embed.Embed(string, System.Uri, string, Guilded.NET.Base.Embeds.EmbedFooter).footer') and title [title](Embed.Embed(string,Uri,string,EmbedFooter)#Guilded.NET.Base.Embeds.Embed.Embed(string,System.Uri,string,Guilded.NET.Base.Embeds.EmbedFooter).title 'Guilded.NET.Base.Embeds.Embed.Embed(string, System.Uri, string, Guilded.NET.Base.Embeds.EmbedFooter).title'). |
| [Embed(string, Uri, string, EmbedMedia)](Embed.Embed(string,Uri,string,EmbedMedia) 'Guilded.NET.Base.Embeds.Embed.Embed(string, System.Uri, string, Guilded.NET.Base.Embeds.EmbedMedia)') | Creates a new instance of [Embed](Embed 'Guilded.NET.Base.Embeds.Embed') with image [image](Embed.Embed(string,Uri,string,EmbedMedia)#Guilded.NET.Base.Embeds.Embed.Embed(string,System.Uri,string,Guilded.NET.Base.Embeds.EmbedMedia).image 'Guilded.NET.Base.Embeds.Embed.Embed(string, System.Uri, string, Guilded.NET.Base.Embeds.EmbedMedia).image') and title [title](Embed.Embed(string,Uri,string,EmbedMedia)#Guilded.NET.Base.Embeds.Embed.Embed(string,System.Uri,string,Guilded.NET.Base.Embeds.EmbedMedia).title 'Guilded.NET.Base.Embeds.Embed.Embed(string, System.Uri, string, Guilded.NET.Base.Embeds.EmbedMedia).title'). |
| [Embed(string, Uri, string, string)](Embed.Embed(string,Uri,string,string) 'Guilded.NET.Base.Embeds.Embed.Embed(string, System.Uri, string, string)') | Creates a new instance of [Embed](Embed 'Guilded.NET.Base.Embeds.Embed') with footer [footer](Embed.Embed(string,Uri,string,string)#Guilded.NET.Base.Embeds.Embed.Embed(string,System.Uri,string,string).footer 'Guilded.NET.Base.Embeds.Embed.Embed(string, System.Uri, string, string).footer') and title [title](Embed.Embed(string,Uri,string,string)#Guilded.NET.Base.Embeds.Embed.Embed(string,System.Uri,string,string).title 'Guilded.NET.Base.Embeds.Embed.Embed(string, System.Uri, string, string).title'). |
| [Embed(string, Uri, string, Uri)](Embed.Embed(string,Uri,string,Uri) 'Guilded.NET.Base.Embeds.Embed.Embed(string, System.Uri, string, System.Uri)') | Creates a new instance of [Embed](Embed 'Guilded.NET.Base.Embeds.Embed') with image [image](Embed.Embed(string,Uri,string,Uri)#Guilded.NET.Base.Embeds.Embed.Embed(string,System.Uri,string,System.Uri).image 'Guilded.NET.Base.Embeds.Embed.Embed(string, System.Uri, string, System.Uri).image') and title [title](Embed.Embed(string,Uri,string,Uri)#Guilded.NET.Base.Embeds.Embed.Embed(string,System.Uri,string,System.Uri).title 'Guilded.NET.Base.Embeds.Embed.Embed(string, System.Uri, string, System.Uri).title'). |
| [Embed(string, Uri, string)](Embed.Embed(string,Uri,string) 'Guilded.NET.Base.Embeds.Embed.Embed(string, System.Uri, string)') | Creates a new instance of [Embed](Embed 'Guilded.NET.Base.Embeds.Embed') with title [title](Embed.Embed(string,Uri,string)#Guilded.NET.Base.Embeds.Embed.Embed(string,System.Uri,string).title 'Guilded.NET.Base.Embeds.Embed.Embed(string, System.Uri, string).title') and URL [url](Embed.Embed(string,Uri,string)#Guilded.NET.Base.Embeds.Embed.Embed(string,System.Uri,string).url 'Guilded.NET.Base.Embeds.Embed.Embed(string, System.Uri, string).url'). |
| [Embed(string, Uri)](Embed.Embed(string,Uri) 'Guilded.NET.Base.Embeds.Embed.Embed(string, System.Uri)') | Creates a new instance of [Embed](Embed 'Guilded.NET.Base.Embeds.Embed') with image [image](Embed.Embed(string,Uri)#Guilded.NET.Base.Embeds.Embed.Embed(string,System.Uri).image 'Guilded.NET.Base.Embeds.Embed.Embed(string, System.Uri).image'). |
| [Embed(string)](Embed.Embed(string) 'Guilded.NET.Base.Embeds.Embed.Embed(string)') | Creates a new instance of [Embed](Embed 'Guilded.NET.Base.Embeds.Embed') with description [description](Embed.Embed(string)#Guilded.NET.Base.Embeds.Embed.Embed(string).description 'Guilded.NET.Base.Embeds.Embed.Embed(string).description'). |
| [Embed(IList&lt;EmbedField&gt;)](Embed.Embed(IList_EmbedField_) 'Guilded.NET.Base.Embeds.Embed.Embed(System.Collections.Generic.IList<Guilded.NET.Base.Embeds.EmbedField>)') | Creates a new instance of [Embed](Embed 'Guilded.NET.Base.Embeds.Embed') with list of fields [fields](Embed.Embed(IList_EmbedField_)#Guilded.NET.Base.Embeds.Embed.Embed(System.Collections.Generic.IList_Guilded.NET.Base.Embeds.EmbedField_).fields 'Guilded.NET.Base.Embeds.Embed.Embed(System.Collections.Generic.IList<Guilded.NET.Base.Embeds.EmbedField>).fields'). |
| [Embed(Color)](Embed.Embed(Color) 'Guilded.NET.Base.Embeds.Embed.Embed(System.Drawing.Color)') | Creates a new instance of [Embed](Embed 'Guilded.NET.Base.Embeds.Embed') with colour [color](Embed.Embed(Color)#Guilded.NET.Base.Embeds.Embed.Embed(System.Drawing.Color).color 'Guilded.NET.Base.Embeds.Embed.Embed(System.Drawing.Color).color'). |
| [Embed(Uri, Uri, Uri)](Embed.Embed(Uri,Uri,Uri) 'Guilded.NET.Base.Embeds.Embed.Embed(System.Uri, System.Uri, System.Uri)') | Creates a new instance of [Embed](Embed 'Guilded.NET.Base.Embeds.Embed') with given parameters converted to [EmbedMedia](EmbedMedia 'Guilded.NET.Base.Embeds.EmbedMedia'). |
| [Embed(Uri)](Embed.Embed(Uri) 'Guilded.NET.Base.Embeds.Embed.Embed(System.Uri)') | Creates a new instance of [Embed](Embed 'Guilded.NET.Base.Embeds.Embed') with URL [url](Embed.Embed(Uri)#Guilded.NET.Base.Embeds.Embed.Embed(System.Uri).url 'Guilded.NET.Base.Embeds.Embed.Embed(System.Uri).url'). |

| Properties | |
| :--- | :--- |
| [Author](Embed.Author 'Guilded.NET.Base.Embeds.Embed.Author') | The author of the embed. |
| [Color](Embed.Color 'Guilded.NET.Base.Embeds.Embed.Color') | The colour of the embed. |
| [Description](Embed.Description 'Guilded.NET.Base.Embeds.Embed.Description') | The description text of the embed. |
| [Fields](Embed.Fields 'Guilded.NET.Base.Embeds.Embed.Fields') | The list of fields in this embed. |
| [Footer](Embed.Footer 'Guilded.NET.Base.Embeds.Embed.Footer') | The footer of the embed. |
| [Image](Embed.Image 'Guilded.NET.Base.Embeds.Embed.Image') | The image of the embed. |
| [Thumbnail](Embed.Thumbnail 'Guilded.NET.Base.Embeds.Embed.Thumbnail') | The thumbnail image of the embed. |
| [Timestamp](Embed.Timestamp 'Guilded.NET.Base.Embeds.Embed.Timestamp') | The timestamp of the embed. |
| [Title](Embed.Title 'Guilded.NET.Base.Embeds.Embed.Title') | The title of the embed. |
| [Url](Embed.Url 'Guilded.NET.Base.Embeds.Embed.Url') | The URL of the embed. |
| [Video](Embed.Video 'Guilded.NET.Base.Embeds.Embed.Video') | The video of the embed. |

| Methods | |
| :--- | :--- |
| [AddField(EmbedField)](Embed.AddField(EmbedField) 'Guilded.NET.Base.Embeds.Embed.AddField(Guilded.NET.Base.Embeds.EmbedField)') | Adds the given field to the embed. |
| [AddField(string, object, bool)](Embed.AddField(string,object,bool) 'Guilded.NET.Base.Embeds.Embed.AddField(string, object, bool)') | Adds the given field to the embed. |
| [AddField(string, string, bool)](Embed.AddField(string,string,bool) 'Guilded.NET.Base.Embeds.Embed.AddField(string, string, bool)') | Adds the given field to the embed. |
| [AddFields(EmbedField[])](Embed.AddFields(EmbedField[]) 'Guilded.NET.Base.Embeds.Embed.AddFields(Guilded.NET.Base.Embeds.EmbedField[])') | Adds the given fields to the embed. |
| [AddFields(IList&lt;EmbedField&gt;)](Embed.AddFields(IList_EmbedField_) 'Guilded.NET.Base.Embeds.Embed.AddFields(System.Collections.Generic.IList<Guilded.NET.Base.Embeds.EmbedField>)') | Adds the given fields to the embed. |
| [SetAuthor(EmbedAuthor)](Embed.SetAuthor(EmbedAuthor) 'Guilded.NET.Base.Embeds.Embed.SetAuthor(Guilded.NET.Base.Embeds.EmbedAuthor)') | Sets the author as the given parameter. |
| [SetAuthor(string, Uri, Uri)](Embed.SetAuthor(string,Uri,Uri) 'Guilded.NET.Base.Embeds.Embed.SetAuthor(string, System.Uri, System.Uri)') | Sets the author as a given parameter. |
| [SetColor(int, int, int)](Embed.SetColor(int,int,int) 'Guilded.NET.Base.Embeds.Embed.SetColor(int, int, int)') | Sets the colour as the given parameters. |
| [SetColor(int)](Embed.SetColor(int) 'Guilded.NET.Base.Embeds.Embed.SetColor(int)') | Sets the colour as the given parameter. |
| [SetColor(Color)](Embed.SetColor(Color) 'Guilded.NET.Base.Embeds.Embed.SetColor(System.Drawing.Color)') | Sets the colour as the given parameter. |
| [SetDescription(object)](Embed.SetDescription(object) 'Guilded.NET.Base.Embeds.Embed.SetDescription(object)') | Sets the description as a given parameter. |
| [SetDescription(string)](Embed.SetDescription(string) 'Guilded.NET.Base.Embeds.Embed.SetDescription(string)') | Sets the description as the given parameter. |
| [SetFooter(EmbedFooter)](Embed.SetFooter(EmbedFooter) 'Guilded.NET.Base.Embeds.Embed.SetFooter(Guilded.NET.Base.Embeds.EmbedFooter)') | Sets the footer as the given parameter. |
| [SetFooter(object, string)](Embed.SetFooter(object,string) 'Guilded.NET.Base.Embeds.Embed.SetFooter(object, string)') | Sets the footer as the given parameters. |
| [SetFooter(object, Uri)](Embed.SetFooter(object,Uri) 'Guilded.NET.Base.Embeds.Embed.SetFooter(object, System.Uri)') | Sets the footer as the given parameters. |
| [SetFooter(string, string)](Embed.SetFooter(string,string) 'Guilded.NET.Base.Embeds.Embed.SetFooter(string, string)') | Sets the footer as the given parameters. |
| [SetFooter(string, Uri)](Embed.SetFooter(string,Uri) 'Guilded.NET.Base.Embeds.Embed.SetFooter(string, System.Uri)') | Sets the footer as the given parameters. |
| [SetImage(EmbedMedia)](Embed.SetImage(EmbedMedia) 'Guilded.NET.Base.Embeds.Embed.SetImage(Guilded.NET.Base.Embeds.EmbedMedia)') | Sets the embed image as the given parameter. |
| [SetImage(string, Nullable&lt;uint&gt;, Nullable&lt;uint&gt;)](Embed.SetImage(string,Nullable_uint_,Nullable_uint_) 'Guilded.NET.Base.Embeds.Embed.SetImage(string, System.Nullable<uint>, System.Nullable<uint>)') | Sets the embed image as the given parameters. |
| [SetImage(Uri, Nullable&lt;uint&gt;, Nullable&lt;uint&gt;)](Embed.SetImage(Uri,Nullable_uint_,Nullable_uint_) 'Guilded.NET.Base.Embeds.Embed.SetImage(System.Uri, System.Nullable<uint>, System.Nullable<uint>)') | Sets the embed image as the given parameters. |
| [SetThumbnail(EmbedMedia)](Embed.SetThumbnail(EmbedMedia) 'Guilded.NET.Base.Embeds.Embed.SetThumbnail(Guilded.NET.Base.Embeds.EmbedMedia)') | Sets the thumbnail as the given parameter. |
| [SetThumbnail(string, Nullable&lt;uint&gt;, Nullable&lt;uint&gt;)](Embed.SetThumbnail(string,Nullable_uint_,Nullable_uint_) 'Guilded.NET.Base.Embeds.Embed.SetThumbnail(string, System.Nullable<uint>, System.Nullable<uint>)') | Sets the thumbnail as the given parameters. |
| [SetThumbnail(Uri, Nullable&lt;uint&gt;, Nullable&lt;uint&gt;)](Embed.SetThumbnail(Uri,Nullable_uint_,Nullable_uint_) 'Guilded.NET.Base.Embeds.Embed.SetThumbnail(System.Uri, System.Nullable<uint>, System.Nullable<uint>)') | Sets the thumbnail as the given parameters. |
| [SetTimestamp()](Embed.SetTimestamp() 'Guilded.NET.Base.Embeds.Embed.SetTimestamp()') | Sets the timestamp as the current date. |
| [SetTimestamp(DateTime)](Embed.SetTimestamp(DateTime) 'Guilded.NET.Base.Embeds.Embed.SetTimestamp(System.DateTime)') | Sets the timestamp as the given parameter. |
| [SetTitle(string)](Embed.SetTitle(string) 'Guilded.NET.Base.Embeds.Embed.SetTitle(string)') | Sets the title as the given parameter. |
| [SetUrl(string)](Embed.SetUrl(string) 'Guilded.NET.Base.Embeds.Embed.SetUrl(string)') | Sets the url as a given parameter. |
| [SetUrl(Uri)](Embed.SetUrl(Uri) 'Guilded.NET.Base.Embeds.Embed.SetUrl(System.Uri)') | Sets the url as the given parameter. |
