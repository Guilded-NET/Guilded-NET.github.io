---
title: Embed
layout: references
section: references
tags:
  - references
  - class
description: "

Represents a custom content embed that includes any kind of information."
---

## Embed Class
###### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Embeds`](Guilded.Base.Embeds 'Guilded.Base.Embeds')

Represents a custom content embed that includes any kind of information.

```csharp
public class Embed : Guilded.Base.BaseObject
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject 'Guilded.Base.BaseObject') &#129106; Embed

### Remarks
  
This is usually used in Webhooks to provide an information about a new post or any event that occurred. It can also be used for displaying results from a bot or used as a content instead of plain Markdown. Embeds may look something like quote blocks, but with more content like fields, footers, etc.

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
| [Embed()](Embed.Embed() 'Guilded.Base.Embeds.Embed.Embed()') | Creates a new empty instance of [Embed](Embed 'Guilded.Base.Embeds.Embed'). |
| [Embed(Color)](Embed.Embed(Color) 'Guilded.Base.Embeds.Embed.Embed(Color)') | Initializes a new instance of [Embed](Embed 'Guilded.Base.Embeds.Embed') with colour [color](Embed.Embed(Color)#Guilded.Base.Embeds.Embed.Embed(Color).color 'Guilded.Base.Embeds.Embed.Embed(Color).color'). |
| [Embed(EmbedField[])](Embed.Embed(EmbedField[]) 'Guilded.Base.Embeds.Embed.Embed(Guilded.Base.Embeds.EmbedField[])') | Initializes a new instance of [Embed](Embed 'Guilded.Base.Embeds.Embed') with its [fields](Embed.Embed(EmbedField[])#Guilded.Base.Embeds.Embed.Embed(Guilded.Base.Embeds.EmbedField[]).fields 'Guilded.Base.Embeds.Embed.Embed(Guilded.Base.Embeds.EmbedField[]).fields'). |
| [Embed(int, int, int)](Embed.Embed(int,int,int) 'Guilded.Base.Embeds.Embed.Embed(int, int, int)') | Initializes a new instance of [Embed](Embed 'Guilded.Base.Embeds.Embed') with channels<br/>[red](Embed.Embed(int,int,int)#Guilded.Base.Embeds.Embed.Embed(int,int,int).red 'Guilded.Base.Embeds.Embed.Embed(int, int, int).red'), [green](Embed.Embed(int,int,int)#Guilded.Base.Embeds.Embed.Embed(int,int,int).green 'Guilded.Base.Embeds.Embed.Embed(int, int, int).green') and [blue](Embed.Embed(int,int,int)#Guilded.Base.Embeds.Embed.Embed(int,int,int).blue 'Guilded.Base.Embeds.Embed.Embed(int, int, int).blue') of [Color](Embed.Color 'Guilded.Base.Embeds.Embed.Color') property. |
| [Embed(int)](Embed.Embed(int) 'Guilded.Base.Embeds.Embed.Embed(int)') | Initializes a new instance of [Embed](Embed 'Guilded.Base.Embeds.Embed') with colour [argb](Embed.Embed(int)#Guilded.Base.Embeds.Embed.Embed(int).argb 'Guilded.Base.Embeds.Embed.Embed(int).argb'). |
| [Embed(string, EmbedField[])](Embed.Embed(string,EmbedField[]) 'Guilded.Base.Embeds.Embed.Embed(string, Guilded.Base.Embeds.EmbedField[])') | Initializes a new instance of [Embed](Embed 'Guilded.Base.Embeds.Embed') with its [fields](Embed.Embed(string,EmbedField[])#Guilded.Base.Embeds.Embed.Embed(string,Guilded.Base.Embeds.EmbedField[]).fields 'Guilded.Base.Embeds.Embed.Embed(string, Guilded.Base.Embeds.EmbedField[]).fields'). |
| [Embed(string, EmbedMedia)](Embed.Embed(string,EmbedMedia) 'Guilded.Base.Embeds.Embed.Embed(string, Guilded.Base.Embeds.EmbedMedia)') | Initializes a new instance of [Embed](Embed 'Guilded.Base.Embeds.Embed') with an [image](Embed.Embed(string,EmbedMedia)#Guilded.Base.Embeds.Embed.Embed(string,Guilded.Base.Embeds.EmbedMedia).image 'Guilded.Base.Embeds.Embed.Embed(string, Guilded.Base.Embeds.EmbedMedia).image'). |
| [Embed(string, string, EmbedField[])](Embed.Embed(string,string,EmbedField[]) 'Guilded.Base.Embeds.Embed.Embed(string, string, Guilded.Base.Embeds.EmbedField[])') | Initializes a new instance of [Embed](Embed 'Guilded.Base.Embeds.Embed') with its [fields](Embed.Embed(string,string,EmbedField[])#Guilded.Base.Embeds.Embed.Embed(string,string,Guilded.Base.Embeds.EmbedField[]).fields 'Guilded.Base.Embeds.Embed.Embed(string, string, Guilded.Base.Embeds.EmbedField[]).fields') and a [title](Embed.Embed(string,string,EmbedField[])#Guilded.Base.Embeds.Embed.Embed(string,string,Guilded.Base.Embeds.EmbedField[]).title 'Guilded.Base.Embeds.Embed.Embed(string, string, Guilded.Base.Embeds.EmbedField[]).title'). |
| [Embed(string, string, EmbedFooter, DateTime)](Embed.Embed(string,string,EmbedFooter,DateTime) 'Guilded.Base.Embeds.Embed.Embed(string, string, Guilded.Base.Embeds.EmbedFooter, System.DateTime)') | Initializes a new instance of [Embed](Embed 'Guilded.Base.Embeds.Embed') with a [footer](Embed.Embed(string,string,EmbedFooter,DateTime)#Guilded.Base.Embeds.Embed.Embed(string,string,Guilded.Base.Embeds.EmbedFooter,System.DateTime).footer 'Guilded.Base.Embeds.Embed.Embed(string, string, Guilded.Base.Embeds.EmbedFooter, System.DateTime).footer') and a [title](Embed.Embed(string,string,EmbedFooter,DateTime)#Guilded.Base.Embeds.Embed.Embed(string,string,Guilded.Base.Embeds.EmbedFooter,System.DateTime).title 'Guilded.Base.Embeds.Embed.Embed(string, string, Guilded.Base.Embeds.EmbedFooter, System.DateTime).title'). |
| [Embed(string, string, EmbedFooter)](Embed.Embed(string,string,EmbedFooter) 'Guilded.Base.Embeds.Embed.Embed(string, string, Guilded.Base.Embeds.EmbedFooter)') | Initializes a new instance of [Embed](Embed 'Guilded.Base.Embeds.Embed') with a [footer](Embed.Embed(string,string,EmbedFooter)#Guilded.Base.Embeds.Embed.Embed(string,string,Guilded.Base.Embeds.EmbedFooter).footer 'Guilded.Base.Embeds.Embed.Embed(string, string, Guilded.Base.Embeds.EmbedFooter).footer') and a [title](Embed.Embed(string,string,EmbedFooter)#Guilded.Base.Embeds.Embed.Embed(string,string,Guilded.Base.Embeds.EmbedFooter).title 'Guilded.Base.Embeds.Embed.Embed(string, string, Guilded.Base.Embeds.EmbedFooter).title'). |
| [Embed(string, string, EmbedMedia)](Embed.Embed(string,string,EmbedMedia) 'Guilded.Base.Embeds.Embed.Embed(string, string, Guilded.Base.Embeds.EmbedMedia)') | Initializes a new instance of [Embed](Embed 'Guilded.Base.Embeds.Embed') with an [image](Embed.Embed(string,string,EmbedMedia)#Guilded.Base.Embeds.Embed.Embed(string,string,Guilded.Base.Embeds.EmbedMedia).image 'Guilded.Base.Embeds.Embed.Embed(string, string, Guilded.Base.Embeds.EmbedMedia).image') and a [title](Embed.Embed(string,string,EmbedMedia)#Guilded.Base.Embeds.Embed.Embed(string,string,Guilded.Base.Embeds.EmbedMedia).title 'Guilded.Base.Embeds.Embed.Embed(string, string, Guilded.Base.Embeds.EmbedMedia).title'). |
| [Embed(string, string, string)](Embed.Embed(string,string,string) 'Guilded.Base.Embeds.Embed.Embed(string, string, string)') | Initializes a new instance of [Embed](Embed 'Guilded.Base.Embeds.Embed') with a [footer](Embed.Embed(string,string,string)#Guilded.Base.Embeds.Embed.Embed(string,string,string).footer 'Guilded.Base.Embeds.Embed.Embed(string, string, string).footer') and a [title](Embed.Embed(string,string,string)#Guilded.Base.Embeds.Embed.Embed(string,string,string).title 'Guilded.Base.Embeds.Embed.Embed(string, string, string).title'). |
| [Embed(string, string, IList&lt;EmbedField&gt;)](Embed.Embed(string,string,IList_EmbedField_) 'Guilded.Base.Embeds.Embed.Embed(string, string, System.Collections.Generic.IList<Guilded.Base.Embeds.EmbedField>)') | Initializes a new instance of [Embed](Embed 'Guilded.Base.Embeds.Embed') with its [fields](Embed.Embed(string,string,IList_EmbedField_)#Guilded.Base.Embeds.Embed.Embed(string,string,System.Collections.Generic.IList_Guilded.Base.Embeds.EmbedField_).fields 'Guilded.Base.Embeds.Embed.Embed(string, string, System.Collections.Generic.IList<Guilded.Base.Embeds.EmbedField>).fields') and a [title](Embed.Embed(string,string,IList_EmbedField_)#Guilded.Base.Embeds.Embed.Embed(string,string,System.Collections.Generic.IList_Guilded.Base.Embeds.EmbedField_).title 'Guilded.Base.Embeds.Embed.Embed(string, string, System.Collections.Generic.IList<Guilded.Base.Embeds.EmbedField>).title'). |
| [Embed(string, string, Uri)](Embed.Embed(string,string,Uri) 'Guilded.Base.Embeds.Embed.Embed(string, string, Uri)') | Initializes a new instance of [Embed](Embed 'Guilded.Base.Embeds.Embed') with an [image](Embed.Embed(string,string,Uri)#Guilded.Base.Embeds.Embed.Embed(string,string,Uri).image 'Guilded.Base.Embeds.Embed.Embed(string, string, Uri).image') and a [title](Embed.Embed(string,string,Uri)#Guilded.Base.Embeds.Embed.Embed(string,string,Uri).title 'Guilded.Base.Embeds.Embed.Embed(string, string, Uri).title'). |
| [Embed(string, string)](Embed.Embed(string,string) 'Guilded.Base.Embeds.Embed.Embed(string, string)') | Initializes a new instance of [Embed](Embed 'Guilded.Base.Embeds.Embed') with title [title](Embed.Embed(string,string)#Guilded.Base.Embeds.Embed.Embed(string,string).title 'Guilded.Base.Embeds.Embed.Embed(string, string).title'). |
| [Embed(string, IList&lt;EmbedField&gt;)](Embed.Embed(string,IList_EmbedField_) 'Guilded.Base.Embeds.Embed.Embed(string, System.Collections.Generic.IList<Guilded.Base.Embeds.EmbedField>)') | Initializes a new instance of [Embed](Embed 'Guilded.Base.Embeds.Embed') with its [fields](Embed.Embed(string,IList_EmbedField_)#Guilded.Base.Embeds.Embed.Embed(string,System.Collections.Generic.IList_Guilded.Base.Embeds.EmbedField_).fields 'Guilded.Base.Embeds.Embed.Embed(string, System.Collections.Generic.IList<Guilded.Base.Embeds.EmbedField>).fields'). |
| [Embed(string, Uri, string, EmbedFooter, DateTime)](Embed.Embed(string,Uri,string,EmbedFooter,DateTime) 'Guilded.Base.Embeds.Embed.Embed(string, Uri, string, Guilded.Base.Embeds.EmbedFooter, System.DateTime)') | Initializes a new instance of [Embed](Embed 'Guilded.Base.Embeds.Embed') with a [footer](Embed.Embed(string,Uri,string,EmbedFooter,DateTime)#Guilded.Base.Embeds.Embed.Embed(string,Uri,string,Guilded.Base.Embeds.EmbedFooter,System.DateTime).footer 'Guilded.Base.Embeds.Embed.Embed(string, Uri, string, Guilded.Base.Embeds.EmbedFooter, System.DateTime).footer') and a [title](Embed.Embed(string,Uri,string,EmbedFooter,DateTime)#Guilded.Base.Embeds.Embed.Embed(string,Uri,string,Guilded.Base.Embeds.EmbedFooter,System.DateTime).title 'Guilded.Base.Embeds.Embed.Embed(string, Uri, string, Guilded.Base.Embeds.EmbedFooter, System.DateTime).title'). |
| [Embed(string, Uri, string, EmbedFooter)](Embed.Embed(string,Uri,string,EmbedFooter) 'Guilded.Base.Embeds.Embed.Embed(string, Uri, string, Guilded.Base.Embeds.EmbedFooter)') | Initializes a new instance of [Embed](Embed 'Guilded.Base.Embeds.Embed') with a [footer](Embed.Embed(string,Uri,string,EmbedFooter)#Guilded.Base.Embeds.Embed.Embed(string,Uri,string,Guilded.Base.Embeds.EmbedFooter).footer 'Guilded.Base.Embeds.Embed.Embed(string, Uri, string, Guilded.Base.Embeds.EmbedFooter).footer') and a [title](Embed.Embed(string,Uri,string,EmbedFooter)#Guilded.Base.Embeds.Embed.Embed(string,Uri,string,Guilded.Base.Embeds.EmbedFooter).title 'Guilded.Base.Embeds.Embed.Embed(string, Uri, string, Guilded.Base.Embeds.EmbedFooter).title'). |
| [Embed(string, Uri, string, EmbedMedia)](Embed.Embed(string,Uri,string,EmbedMedia) 'Guilded.Base.Embeds.Embed.Embed(string, Uri, string, Guilded.Base.Embeds.EmbedMedia)') | Initializes a new instance of [Embed](Embed 'Guilded.Base.Embeds.Embed') with an [image](Embed.Embed(string,Uri,string,EmbedMedia)#Guilded.Base.Embeds.Embed.Embed(string,Uri,string,Guilded.Base.Embeds.EmbedMedia).image 'Guilded.Base.Embeds.Embed.Embed(string, Uri, string, Guilded.Base.Embeds.EmbedMedia).image') and a [title](Embed.Embed(string,Uri,string,EmbedMedia)#Guilded.Base.Embeds.Embed.Embed(string,Uri,string,Guilded.Base.Embeds.EmbedMedia).title 'Guilded.Base.Embeds.Embed.Embed(string, Uri, string, Guilded.Base.Embeds.EmbedMedia).title'). |
| [Embed(string, Uri, string, string)](Embed.Embed(string,Uri,string,string) 'Guilded.Base.Embeds.Embed.Embed(string, Uri, string, string)') | Initializes a new instance of [Embed](Embed 'Guilded.Base.Embeds.Embed') with a [footer](Embed.Embed(string,Uri,string,string)#Guilded.Base.Embeds.Embed.Embed(string,Uri,string,string).footer 'Guilded.Base.Embeds.Embed.Embed(string, Uri, string, string).footer') and a [title](Embed.Embed(string,Uri,string,string)#Guilded.Base.Embeds.Embed.Embed(string,Uri,string,string).title 'Guilded.Base.Embeds.Embed.Embed(string, Uri, string, string).title'). |
| [Embed(string, Uri, string, Uri)](Embed.Embed(string,Uri,string,Uri) 'Guilded.Base.Embeds.Embed.Embed(string, Uri, string, Uri)') | Initializes a new instance of [Embed](Embed 'Guilded.Base.Embeds.Embed') with an [image](Embed.Embed(string,Uri,string,Uri)#Guilded.Base.Embeds.Embed.Embed(string,Uri,string,Uri).image 'Guilded.Base.Embeds.Embed.Embed(string, Uri, string, Uri).image') and a [title](Embed.Embed(string,Uri,string,Uri)#Guilded.Base.Embeds.Embed.Embed(string,Uri,string,Uri).title 'Guilded.Base.Embeds.Embed.Embed(string, Uri, string, Uri).title'). |
| [Embed(string, Uri, string)](Embed.Embed(string,Uri,string) 'Guilded.Base.Embeds.Embed.Embed(string, Uri, string)') | Initializes a new instance of [Embed](Embed 'Guilded.Base.Embeds.Embed') with a [title](Embed.Embed(string,Uri,string)#Guilded.Base.Embeds.Embed.Embed(string,Uri,string).title 'Guilded.Base.Embeds.Embed.Embed(string, Uri, string).title') and a [url](Embed.Embed(string,Uri,string)#Guilded.Base.Embeds.Embed.Embed(string,Uri,string).url 'Guilded.Base.Embeds.Embed.Embed(string, Uri, string).url'). |
| [Embed(string, Uri)](Embed.Embed(string,Uri) 'Guilded.Base.Embeds.Embed.Embed(string, Uri)') | Initializes a new instance of [Embed](Embed 'Guilded.Base.Embeds.Embed') with an [image](Embed.Embed(string,Uri)#Guilded.Base.Embeds.Embed.Embed(string,Uri).image 'Guilded.Base.Embeds.Embed.Embed(string, Uri).image'). |
| [Embed(string)](Embed.Embed(string) 'Guilded.Base.Embeds.Embed.Embed(string)') | Initializes a new instance of [Embed](Embed 'Guilded.Base.Embeds.Embed') with a [description](Embed.Embed(string)#Guilded.Base.Embeds.Embed.Embed(string).description 'Guilded.Base.Embeds.Embed.Embed(string).description'). |
| [Embed(IList&lt;EmbedField&gt;)](Embed.Embed(IList_EmbedField_) 'Guilded.Base.Embeds.Embed.Embed(System.Collections.Generic.IList<Guilded.Base.Embeds.EmbedField>)') | Initializes a new instance of [Embed](Embed 'Guilded.Base.Embeds.Embed') with its [fields](Embed.Embed(IList_EmbedField_)#Guilded.Base.Embeds.Embed.Embed(System.Collections.Generic.IList_Guilded.Base.Embeds.EmbedField_).fields 'Guilded.Base.Embeds.Embed.Embed(System.Collections.Generic.IList<Guilded.Base.Embeds.EmbedField>).fields'). |
| [Embed(Uri, Uri)](Embed.Embed(Uri,Uri) 'Guilded.Base.Embeds.Embed.Embed(Uri, Uri)') | Initializes a new instance of [Embed](Embed 'Guilded.Base.Embeds.Embed') with the given imagess. |
| [Embed(Uri)](Embed.Embed(Uri) 'Guilded.Base.Embeds.Embed.Embed(Uri)') | Initializes a new instance of [Embed](Embed 'Guilded.Base.Embeds.Embed') with a [url](Embed.Embed(Uri)#Guilded.Base.Embeds.Embed.Embed(Uri).url 'Guilded.Base.Embeds.Embed.Embed(Uri).url'). |

| Fields | |
| :--- | :--- |
| [FieldLimit](Embed.FieldLimit 'Guilded.Base.Embeds.Embed.FieldLimit') | The count of how many fields there can be in [Embed](Embed 'Guilded.Base.Embeds.Embed'). |

| Properties | |
| :--- | :--- |
| [Author](Embed.Author 'Guilded.Base.Embeds.Embed.Author') | Gets the author of the content that [embed](Embed 'Guilded.Base.Embeds.Embed') displays. |
| [Color](Embed.Color 'Guilded.Base.Embeds.Embed.Color') | Gets the colour of the [embed](Embed 'Guilded.Base.Embeds.Embed'). |
| [Description](Embed.Description 'Guilded.Base.Embeds.Embed.Description') | The description text of the [embed](Embed 'Guilded.Base.Embeds.Embed'). |
| [Fields](Embed.Fields 'Guilded.Base.Embeds.Embed.Fields') | Gets the list of fields in the [embed](Embed 'Guilded.Base.Embeds.Embed'). |
| [Footer](Embed.Footer 'Guilded.Base.Embeds.Embed.Footer') | The footer of [an embed](Embed 'Guilded.Base.Embeds.Embed'). |
| [Image](Embed.Image 'Guilded.Base.Embeds.Embed.Image') | Gets the image of the content that [embed](Embed 'Guilded.Base.Embeds.Embed') displays. |
| [Thumbnail](Embed.Thumbnail 'Guilded.Base.Embeds.Embed.Thumbnail') | Gets the thumbnail image of the [embed](Embed 'Guilded.Base.Embeds.Embed'). |
| [Timestamp](Embed.Timestamp 'Guilded.Base.Embeds.Embed.Timestamp') | Gets the timestamp of [an embed](Embed 'Guilded.Base.Embeds.Embed'). |
| [Title](Embed.Title 'Guilded.Base.Embeds.Embed.Title') | Gets the title of the [embed](Embed 'Guilded.Base.Embeds.Embed'). |
| [Url](Embed.Url 'Guilded.Base.Embeds.Embed.Url') | Gets the URL of the content that [embed](Embed 'Guilded.Base.Embeds.Embed') displays. |

| Methods | |
| :--- | :--- |
| [AddField(EmbedField)](Embed.AddField(EmbedField) 'Guilded.Base.Embeds.Embed.AddField(Guilded.Base.Embeds.EmbedField)') | Adds a new [field](Embed.AddField(EmbedField)#Guilded.Base.Embeds.Embed.AddField(Guilded.Base.Embeds.EmbedField).field 'Guilded.Base.Embeds.Embed.AddField(Guilded.Base.Embeds.EmbedField).field') to the [current set of fields](Embed.Fields 'Guilded.Base.Embeds.Embed.Fields'). |
| [AddField(string, object, bool)](Embed.AddField(string,object,bool) 'Guilded.Base.Embeds.Embed.AddField(string, object, bool)') | Adds a new field to the [current set of fields](Embed.Fields 'Guilded.Base.Embeds.Embed.Fields'). |
| [AddField(string, string, bool)](Embed.AddField(string,string,bool) 'Guilded.Base.Embeds.Embed.AddField(string, string, bool)') | Adds a new field to the [current set of fields](Embed.Fields 'Guilded.Base.Embeds.Embed.Fields'). |
| [AddFields(EmbedField[])](Embed.AddFields(EmbedField[]) 'Guilded.Base.Embeds.Embed.AddFields(Guilded.Base.Embeds.EmbedField[])') | Adds new [fields](Embed.AddFields(EmbedField[])#Guilded.Base.Embeds.Embed.AddFields(Guilded.Base.Embeds.EmbedField[]).fields 'Guilded.Base.Embeds.Embed.AddFields(Guilded.Base.Embeds.EmbedField[]).fields') to the [current set of fields](Embed.Fields 'Guilded.Base.Embeds.Embed.Fields'). |
| [AddFields(IEnumerable&lt;EmbedField&gt;)](Embed.AddFields(IEnumerable_EmbedField_) 'Guilded.Base.Embeds.Embed.AddFields(System.Collections.Generic.IEnumerable<Guilded.Base.Embeds.EmbedField>)') | Adds new [fields](Embed.AddFields(IEnumerable_EmbedField_)#Guilded.Base.Embeds.Embed.AddFields(System.Collections.Generic.IEnumerable_Guilded.Base.Embeds.EmbedField_).fields 'Guilded.Base.Embeds.Embed.AddFields(System.Collections.Generic.IEnumerable<Guilded.Base.Embeds.EmbedField>).fields') to the [current set of fields](Embed.Fields 'Guilded.Base.Embeds.Embed.Fields'). |
| [SetAuthor(EmbedAuthor)](Embed.SetAuthor(EmbedAuthor) 'Guilded.Base.Embeds.Embed.SetAuthor(Guilded.Base.Embeds.EmbedAuthor)') | Sets the [author](Embed.Author 'Guilded.Base.Embeds.Embed.Author') as the given [value](Embed.SetAuthor(EmbedAuthor)#Guilded.Base.Embeds.Embed.SetAuthor(Guilded.Base.Embeds.EmbedAuthor).value 'Guilded.Base.Embeds.Embed.SetAuthor(Guilded.Base.Embeds.EmbedAuthor).value'). |
| [SetAuthor(string, string, string)](Embed.SetAuthor(string,string,string) 'Guilded.Base.Embeds.Embed.SetAuthor(string, string, string)') | Sets the [author](Embed.Author 'Guilded.Base.Embeds.Embed.Author') as the given author with the given [name](Embed.SetAuthor(string,string,string)#Guilded.Base.Embeds.Embed.SetAuthor(string,string,string).name 'Guilded.Base.Embeds.Embed.SetAuthor(string, string, string).name'). |
| [SetAuthor(string, Uri, Uri)](Embed.SetAuthor(string,Uri,Uri) 'Guilded.Base.Embeds.Embed.SetAuthor(string, Uri, Uri)') | Sets the [author](Embed.Author 'Guilded.Base.Embeds.Embed.Author') as the given author with the given [name](Embed.SetAuthor(string,Uri,Uri)#Guilded.Base.Embeds.Embed.SetAuthor(string,Uri,Uri).name 'Guilded.Base.Embeds.Embed.SetAuthor(string, Uri, Uri).name'). |
| [SetAuthor(string)](Embed.SetAuthor(string) 'Guilded.Base.Embeds.Embed.SetAuthor(string)') | Sets the [author](Embed.Author 'Guilded.Base.Embeds.Embed.Author') as the given author with the given [name](Embed.SetAuthor(string)#Guilded.Base.Embeds.Embed.SetAuthor(string).name 'Guilded.Base.Embeds.Embed.SetAuthor(string).name'). |
| [SetColor(Color)](Embed.SetColor(Color) 'Guilded.Base.Embeds.Embed.SetColor(Color)') | Sets the [left-side colour](Embed.Color 'Guilded.Base.Embeds.Embed.Color') as the given [value](Embed.SetColor(Color)#Guilded.Base.Embeds.Embed.SetColor(Color).value 'Guilded.Base.Embeds.Embed.SetColor(Color).value'). |
| [SetColor(int, int, int)](Embed.SetColor(int,int,int) 'Guilded.Base.Embeds.Embed.SetColor(int, int, int)') | Sets the [left-side colour](Embed.Color 'Guilded.Base.Embeds.Embed.Color') as the given value. |
| [SetColor(int)](Embed.SetColor(int) 'Guilded.Base.Embeds.Embed.SetColor(int)') | Sets the [left-side colour](Embed.Color 'Guilded.Base.Embeds.Embed.Color') as the given value. |
| [SetDescription(object)](Embed.SetDescription(object) 'Guilded.Base.Embeds.Embed.SetDescription(object)') | Sets the [description](Embed.Description 'Guilded.Base.Embeds.Embed.Description') as the given [value](Embed.SetDescription(object)#Guilded.Base.Embeds.Embed.SetDescription(object).value 'Guilded.Base.Embeds.Embed.SetDescription(object).value'). |
| [SetDescription(string)](Embed.SetDescription(string) 'Guilded.Base.Embeds.Embed.SetDescription(string)') | Sets the [description](Embed.Description 'Guilded.Base.Embeds.Embed.Description') as the given [content](Embed.SetDescription(string)#Guilded.Base.Embeds.Embed.SetDescription(string).content 'Guilded.Base.Embeds.Embed.SetDescription(string).content'). |
| [SetFooter(EmbedFooter)](Embed.SetFooter(EmbedFooter) 'Guilded.Base.Embeds.Embed.SetFooter(Guilded.Base.Embeds.EmbedFooter)') | Sets the [footer](Embed.Footer 'Guilded.Base.Embeds.Embed.Footer') as the given [value](Embed.SetFooter(EmbedFooter)#Guilded.Base.Embeds.Embed.SetFooter(Guilded.Base.Embeds.EmbedFooter).value 'Guilded.Base.Embeds.Embed.SetFooter(Guilded.Base.Embeds.EmbedFooter).value'). |
| [SetFooter(object, string)](Embed.SetFooter(object,string) 'Guilded.Base.Embeds.Embed.SetFooter(object, string)') | |
| [SetFooter(object, Uri)](Embed.SetFooter(object,Uri) 'Guilded.Base.Embeds.Embed.SetFooter(object, Uri)') | |
| [SetFooter(object)](Embed.SetFooter(object) 'Guilded.Base.Embeds.Embed.SetFooter(object)') | |
| [SetFooter(string, string)](Embed.SetFooter(string,string) 'Guilded.Base.Embeds.Embed.SetFooter(string, string)') | Sets the [footer](Embed.Footer 'Guilded.Base.Embeds.Embed.Footer') as the given value. |
| [SetFooter(string, Uri)](Embed.SetFooter(string,Uri) 'Guilded.Base.Embeds.Embed.SetFooter(string, Uri)') | Sets the [footer](Embed.Footer 'Guilded.Base.Embeds.Embed.Footer') as the given value. |
| [SetFooter(string)](Embed.SetFooter(string) 'Guilded.Base.Embeds.Embed.SetFooter(string)') | Sets the [footer](Embed.Footer 'Guilded.Base.Embeds.Embed.Footer') as the given value. |
| [SetImage(EmbedMedia)](Embed.SetImage(EmbedMedia) 'Guilded.Base.Embeds.Embed.SetImage(Guilded.Base.Embeds.EmbedMedia)') | Sets the [image](Embed.Image 'Guilded.Base.Embeds.Embed.Image') as the given [value](Embed.SetImage(EmbedMedia)#Guilded.Base.Embeds.Embed.SetImage(Guilded.Base.Embeds.EmbedMedia).value 'Guilded.Base.Embeds.Embed.SetImage(Guilded.Base.Embeds.EmbedMedia).value'). |
| [SetImage(string)](Embed.SetImage(string) 'Guilded.Base.Embeds.Embed.SetImage(string)') | Sets the [image](Embed.Image 'Guilded.Base.Embeds.Embed.Image') as the given value. |
| [SetImage(Uri)](Embed.SetImage(Uri) 'Guilded.Base.Embeds.Embed.SetImage(Uri)') | Sets the [image](Embed.Image 'Guilded.Base.Embeds.Embed.Image') as the given value. |
| [SetThumbnail(EmbedMedia)](Embed.SetThumbnail(EmbedMedia) 'Guilded.Base.Embeds.Embed.SetThumbnail(Guilded.Base.Embeds.EmbedMedia)') | Sets the [thumbnail](Embed.Thumbnail 'Guilded.Base.Embeds.Embed.Thumbnail') as the given [value](Embed.SetThumbnail(EmbedMedia)#Guilded.Base.Embeds.Embed.SetThumbnail(Guilded.Base.Embeds.EmbedMedia).value 'Guilded.Base.Embeds.Embed.SetThumbnail(Guilded.Base.Embeds.EmbedMedia).value'). |
| [SetThumbnail(string)](Embed.SetThumbnail(string) 'Guilded.Base.Embeds.Embed.SetThumbnail(string)') | Sets the [thumbnail](Embed.Thumbnail 'Guilded.Base.Embeds.Embed.Thumbnail') as the given value. |
| [SetThumbnail(Uri)](Embed.SetThumbnail(Uri) 'Guilded.Base.Embeds.Embed.SetThumbnail(Uri)') | Sets the [thumbnail](Embed.Thumbnail 'Guilded.Base.Embeds.Embed.Thumbnail') as the given value. |
| [SetTimestamp()](Embed.SetTimestamp() 'Guilded.Base.Embeds.Embed.SetTimestamp()') | Sets the [timestamp](Embed.Timestamp 'Guilded.Base.Embeds.Embed.Timestamp') as the [current UTC time](https://docs.microsoft.com/en-us/dotnet/api/System.DateTime.UtcNow 'System.DateTime.UtcNow'). |
| [SetTimestamp(DateTime)](Embed.SetTimestamp(DateTime) 'Guilded.Base.Embeds.Embed.SetTimestamp(System.DateTime)') | Sets the [timestamp](Embed.Timestamp 'Guilded.Base.Embeds.Embed.Timestamp') as the given [value](Embed.SetTimestamp(DateTime)#Guilded.Base.Embeds.Embed.SetTimestamp(System.DateTime).value 'Guilded.Base.Embeds.Embed.SetTimestamp(System.DateTime).value'). |
| [SetTitle(string)](Embed.SetTitle(string) 'Guilded.Base.Embeds.Embed.SetTitle(string)') | Sets the [title](Embed.Title 'Guilded.Base.Embeds.Embed.Title') as the given [value](Embed.SetTitle(string)#Guilded.Base.Embeds.Embed.SetTitle(string).value 'Guilded.Base.Embeds.Embed.SetTitle(string).value'). |
| [SetUrl(string)](Embed.SetUrl(string) 'Guilded.Base.Embeds.Embed.SetUrl(string)') | Sets the [url](Embed.Url 'Guilded.Base.Embeds.Embed.Url') as the given [value](Embed.SetUrl(string)#Guilded.Base.Embeds.Embed.SetUrl(string).value 'Guilded.Base.Embeds.Embed.SetUrl(string).value'). |
| [SetUrl(Uri)](Embed.SetUrl(Uri) 'Guilded.Base.Embeds.Embed.SetUrl(Uri)') | Sets the [url](Embed.Url 'Guilded.Base.Embeds.Embed.Url') as the given [value](Embed.SetUrl(Uri)#Guilded.Base.Embeds.Embed.SetUrl(Uri).value 'Guilded.Base.Embeds.Embed.SetUrl(Uri).value'). |

### See Also
- [Message](Message 'Guilded.Base.Content.Message')
- [ForumThread](ForumThread 'Guilded.Base.Content.ForumThread')
- [ListItem](ListItem 'Guilded.Base.Content.ListItem')
- [Doc](Doc 'Guilded.Base.Content.Doc')