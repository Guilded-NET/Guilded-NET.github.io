#### [Guilded.NET.Base](Guilded_NET_Base.md 'Guilded.NET.Base')
### [Guilded.NET.Base.Embeds](Guilded_NET_Base.md#Guilded_NET_Base_Embeds 'Guilded.NET.Base.Embeds')
## Embed Class
The data of the message embed.  
```csharp
public class Embed : Guilded.NET.Base.BaseObject
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject.md 'Guilded.NET.Base.BaseObject') &#129106; Embed  
### Example
```csharp
Embed embed = new Embed  
{  
    Title = "Title here",  
    Description = "Description here",  
    Footer = new EmbedFooter("Footer text")  
};  
```
```csharp
  
Embed embed = new Embed(thumbnail: imageUrl)  
{  
    Title = "Title here",  
    Description = "Description here"  
};  
```
```csharp
  
Embed embed = new Embed("Title here", "Description here", "Footer text here");  
```
```csharp
  
Embed embed = new Embed()  
    .WithTitle("Title here")  
    .WithDescription("Description here")  
    .WithFooter("Footer text here");  
```
### Remarks
One of the embeds for [ChatEmbed](ChatEmbed.md 'Guilded.NET.Base.Chat.ChatEmbed').  

| Constructors | |
| :--- | :--- |
| [Embed()](Embed_Embed().md 'Guilded.NET.Base.Embeds.Embed.Embed()') | The data of the message embed.<br/> |
| [Embed(EmbedField[])](Embed_Embed(EmbedField__).md 'Guilded.NET.Base.Embeds.Embed.Embed(Guilded.NET.Base.Embeds.EmbedField[])') | The data of the message embed.<br/> |
| [Embed(string, EmbedField[])](Embed_Embed(string_EmbedField__).md 'Guilded.NET.Base.Embeds.Embed.Embed(string, Guilded.NET.Base.Embeds.EmbedField[])') | The data of the message embed.<br/> |
| [Embed(string, EmbedMedia)](Embed_Embed(string_EmbedMedia).md 'Guilded.NET.Base.Embeds.Embed.Embed(string, Guilded.NET.Base.Embeds.EmbedMedia)') | The data of the message embed.<br/> |
| [Embed(string, string, EmbedField[])](Embed_Embed(string_string_EmbedField__).md 'Guilded.NET.Base.Embeds.Embed.Embed(string, string, Guilded.NET.Base.Embeds.EmbedField[])') | The data of the message embed.<br/> |
| [Embed(string, string, EmbedFooter, DateTime)](Embed_Embed(string_string_EmbedFooter_DateTime).md 'Guilded.NET.Base.Embeds.Embed.Embed(string, string, Guilded.NET.Base.Embeds.EmbedFooter, System.DateTime)') | The data of the message embed.<br/> |
| [Embed(string, string, EmbedFooter)](Embed_Embed(string_string_EmbedFooter).md 'Guilded.NET.Base.Embeds.Embed.Embed(string, string, Guilded.NET.Base.Embeds.EmbedFooter)') | The data of the message embed.<br/> |
| [Embed(string, string, EmbedMedia)](Embed_Embed(string_string_EmbedMedia).md 'Guilded.NET.Base.Embeds.Embed.Embed(string, string, Guilded.NET.Base.Embeds.EmbedMedia)') | The data of the message embed.<br/> |
| [Embed(string, string, string)](Embed_Embed(string_string_string).md 'Guilded.NET.Base.Embeds.Embed.Embed(string, string, string)') | The data of the message embed.<br/> |
| [Embed(string, string, IList&lt;EmbedField&gt;)](Embed_Embed(string_string_IList_EmbedField_).md 'Guilded.NET.Base.Embeds.Embed.Embed(string, string, System.Collections.Generic.IList&lt;Guilded.NET.Base.Embeds.EmbedField&gt;)') | The data of the message embed.<br/> |
| [Embed(string, string, Uri)](Embed_Embed(string_string_Uri).md 'Guilded.NET.Base.Embeds.Embed.Embed(string, string, System.Uri)') | The data of the message embed.<br/> |
| [Embed(string, string)](Embed_Embed(string_string).md 'Guilded.NET.Base.Embeds.Embed.Embed(string, string)') | The data of the message embed.<br/> |
| [Embed(string, IList&lt;EmbedField&gt;)](Embed_Embed(string_IList_EmbedField_).md 'Guilded.NET.Base.Embeds.Embed.Embed(string, System.Collections.Generic.IList&lt;Guilded.NET.Base.Embeds.EmbedField&gt;)') | The data of the message embed.<br/> |
| [Embed(string, Uri, string, EmbedFooter, DateTime)](Embed_Embed(string_Uri_string_EmbedFooter_DateTime).md 'Guilded.NET.Base.Embeds.Embed.Embed(string, System.Uri, string, Guilded.NET.Base.Embeds.EmbedFooter, System.DateTime)') | The data of the message embed.<br/> |
| [Embed(string, Uri, string, EmbedFooter)](Embed_Embed(string_Uri_string_EmbedFooter).md 'Guilded.NET.Base.Embeds.Embed.Embed(string, System.Uri, string, Guilded.NET.Base.Embeds.EmbedFooter)') | The data of the message embed.<br/> |
| [Embed(string, Uri, string, EmbedMedia)](Embed_Embed(string_Uri_string_EmbedMedia).md 'Guilded.NET.Base.Embeds.Embed.Embed(string, System.Uri, string, Guilded.NET.Base.Embeds.EmbedMedia)') | The data of the message embed.<br/> |
| [Embed(string, Uri, string, string)](Embed_Embed(string_Uri_string_string).md 'Guilded.NET.Base.Embeds.Embed.Embed(string, System.Uri, string, string)') | The data of the message embed.<br/> |
| [Embed(string, Uri, string, Uri)](Embed_Embed(string_Uri_string_Uri).md 'Guilded.NET.Base.Embeds.Embed.Embed(string, System.Uri, string, System.Uri)') | The data of the message embed.<br/> |
| [Embed(string, Uri, string)](Embed_Embed(string_Uri_string).md 'Guilded.NET.Base.Embeds.Embed.Embed(string, System.Uri, string)') | The data of the message embed.<br/> |
| [Embed(string, Uri)](Embed_Embed(string_Uri).md 'Guilded.NET.Base.Embeds.Embed.Embed(string, System.Uri)') | The data of the message embed.<br/> |
| [Embed(string)](Embed_Embed(string).md 'Guilded.NET.Base.Embeds.Embed.Embed(string)') | The data of the message embed.<br/> |
| [Embed(IList&lt;EmbedField&gt;)](Embed_Embed(IList_EmbedField_).md 'Guilded.NET.Base.Embeds.Embed.Embed(System.Collections.Generic.IList&lt;Guilded.NET.Base.Embeds.EmbedField&gt;)') | The data of the message embed.<br/> |
| [Embed(Uri, Uri, Uri)](Embed_Embed(Uri_Uri_Uri).md 'Guilded.NET.Base.Embeds.Embed.Embed(System.Uri, System.Uri, System.Uri)') | The data of the message embed.<br/> |

| Properties | |
| :--- | :--- |
| [Author](Embed_Author.md 'Guilded.NET.Base.Embeds.Embed.Author') | The author of the embed.<br/> |
| [Color](Embed_Color.md 'Guilded.NET.Base.Embeds.Embed.Color') | The colour of the embed.<br/> |
| [Description](Embed_Description.md 'Guilded.NET.Base.Embeds.Embed.Description') | The description text of the embed.<br/> |
| [Fields](Embed_Fields.md 'Guilded.NET.Base.Embeds.Embed.Fields') | The list of fields in this embed.<br/> |
| [Footer](Embed_Footer.md 'Guilded.NET.Base.Embeds.Embed.Footer') | The footer of the embed.<br/> |
| [Image](Embed_Image.md 'Guilded.NET.Base.Embeds.Embed.Image') | The image of the embed.<br/> |
| [Provider](Embed_Provider.md 'Guilded.NET.Base.Embeds.Embed.Provider') | The provider of the embed.<br/> |
| [Thumbnail](Embed_Thumbnail.md 'Guilded.NET.Base.Embeds.Embed.Thumbnail') | The thumbnail image of the embed.<br/> |
| [Timestamp](Embed_Timestamp.md 'Guilded.NET.Base.Embeds.Embed.Timestamp') | The timestamp of the embed footer.<br/> |
| [Title](Embed_Title.md 'Guilded.NET.Base.Embeds.Embed.Title') | The title of the embed.<br/> |
| [Url](Embed_Url.md 'Guilded.NET.Base.Embeds.Embed.Url') | The URL of the embed.<br/> |
| [Video](Embed_Video.md 'Guilded.NET.Base.Embeds.Embed.Video') | The video of the embed.<br/> |

| Methods | |
| :--- | :--- |
| [WithAuthor(EmbedAuthor)](Embed_WithAuthor(EmbedAuthor).md 'Guilded.NET.Base.Embeds.Embed.WithAuthor(Guilded.NET.Base.Embeds.EmbedAuthor)') | Sets author to this embed.<br/> |
| [WithAuthor(string, Uri, Uri)](Embed_WithAuthor(string_Uri_Uri).md 'Guilded.NET.Base.Embeds.Embed.WithAuthor(string, System.Uri, System.Uri)') | Sets author to this embed.<br/> |
| [WithColor(int, int, int)](Embed_WithColor(int_int_int).md 'Guilded.NET.Base.Embeds.Embed.WithColor(int, int, int)') | Sets the colour of the embed.<br/> |
| [WithColor(int)](Embed_WithColor(int).md 'Guilded.NET.Base.Embeds.Embed.WithColor(int)') | Sets the colour of the embed.<br/> |
| [WithColor(Color)](Embed_WithColor(Color).md 'Guilded.NET.Base.Embeds.Embed.WithColor(System.Drawing.Color)') | Sets the colour of the embed.<br/> |
| [WithDescription(object)](Embed_WithDescription(object).md 'Guilded.NET.Base.Embeds.Embed.WithDescription(object)') | Sets the description of the embed.<br/> |
| [WithDescription(string, object[])](Embed_WithDescription(string_object__).md 'Guilded.NET.Base.Embeds.Embed.WithDescription(string, object[])') | Sets the description of the embed.<br/> |
| [WithDescription(string)](Embed_WithDescription(string).md 'Guilded.NET.Base.Embeds.Embed.WithDescription(string)') | Sets the description of the embed.<br/> |
| [WithDescription(IFormatProvider, string, object[])](Embed_WithDescription(IFormatProvider_string_object__).md 'Guilded.NET.Base.Embeds.Embed.WithDescription(System.IFormatProvider, string, object[])') | Sets the description of the embed.<br/> |
| [WithField(EmbedField)](Embed_WithField(EmbedField).md 'Guilded.NET.Base.Embeds.Embed.WithField(Guilded.NET.Base.Embeds.EmbedField)') | Adds a field to this embed.<br/> |
| [WithField(string, object, bool)](Embed_WithField(string_object_bool).md 'Guilded.NET.Base.Embeds.Embed.WithField(string, object, bool)') | Adds a field to this embed.<br/> |
| [WithField(string, string, bool)](Embed_WithField(string_string_bool).md 'Guilded.NET.Base.Embeds.Embed.WithField(string, string, bool)') | Adds a field to this embed.<br/> |
| [WithFields(EmbedField[])](Embed_WithFields(EmbedField__).md 'Guilded.NET.Base.Embeds.Embed.WithFields(Guilded.NET.Base.Embeds.EmbedField[])') | Adds fields to this embed.<br/> |
| [WithFields(IList&lt;EmbedField&gt;)](Embed_WithFields(IList_EmbedField_).md 'Guilded.NET.Base.Embeds.Embed.WithFields(System.Collections.Generic.IList&lt;Guilded.NET.Base.Embeds.EmbedField&gt;)') | Adds fields to this embed.<br/> |
| [WithFooter(EmbedFooter)](Embed_WithFooter(EmbedFooter).md 'Guilded.NET.Base.Embeds.Embed.WithFooter(Guilded.NET.Base.Embeds.EmbedFooter)') | Adds the footer to this embed.<br/> |
| [WithFooter(object, Uri)](Embed_WithFooter(object_Uri).md 'Guilded.NET.Base.Embeds.Embed.WithFooter(object, System.Uri)') | Adds the footer to this embed.<br/> |
| [WithFooter(string, Uri)](Embed_WithFooter(string_Uri).md 'Guilded.NET.Base.Embeds.Embed.WithFooter(string, System.Uri)') | Adds the footer to this embed.<br/> |
| [WithImage(EmbedMedia)](Embed_WithImage(EmbedMedia).md 'Guilded.NET.Base.Embeds.Embed.WithImage(Guilded.NET.Base.Embeds.EmbedMedia)') | Sets the image of the embed.<br/> |
| [WithImage(Uri, Nullable&lt;uint&gt;, Nullable&lt;uint&gt;)](Embed_WithImage(Uri_Nullable_uint__Nullable_uint_).md 'Guilded.NET.Base.Embeds.Embed.WithImage(System.Uri, System.Nullable&lt;uint&gt;, System.Nullable&lt;uint&gt;)') | Sets the image of the embed.<br/> |
| [WithThumbnail(EmbedMedia)](Embed_WithThumbnail(EmbedMedia).md 'Guilded.NET.Base.Embeds.Embed.WithThumbnail(Guilded.NET.Base.Embeds.EmbedMedia)') | Sets the thumbnail of the embed.<br/> |
| [WithThumbnail(Uri, Nullable&lt;uint&gt;, Nullable&lt;uint&gt;)](Embed_WithThumbnail(Uri_Nullable_uint__Nullable_uint_).md 'Guilded.NET.Base.Embeds.Embed.WithThumbnail(System.Uri, System.Nullable&lt;uint&gt;, System.Nullable&lt;uint&gt;)') | Sets the thumbnail of the embed.<br/> |
| [WithTimestamp()](Embed_WithTimestamp().md 'Guilded.NET.Base.Embeds.Embed.WithTimestamp()') | Sets the timestamp of the embed to current time.<br/> |
| [WithTimestamp(DateTime)](Embed_WithTimestamp(DateTime).md 'Guilded.NET.Base.Embeds.Embed.WithTimestamp(System.DateTime)') | Sets the timestamp of the embed.<br/> |
| [WithTitle(string)](Embed_WithTitle(string).md 'Guilded.NET.Base.Embeds.Embed.WithTitle(string)') | Sets embed's title name and URL.<br/> |
| [WithUrl(Uri)](Embed_WithUrl(Uri).md 'Guilded.NET.Base.Embeds.Embed.WithUrl(System.Uri)') | Sets the URL of the title in the embed.<br/> |
#### See Also
- [ChatEmbed](ChatEmbed.md 'Guilded.NET.Base.Chat.ChatEmbed')
- [ContentEmbed](ContentEmbed.md 'Guilded.NET.Base.Chat.ContentEmbed')
