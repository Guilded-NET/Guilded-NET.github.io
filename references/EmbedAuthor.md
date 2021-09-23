
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded_NET_Base')
### [Guilded.NET.Base.Embeds](Guilded_NET_Base#Guilded_NET_Base_Embeds 'Guilded.NET.Base.Embeds')
## EmbedAuthor Class
The provided information about embed author.  
```csharp
public class EmbedAuthor : Guilded.NET.Base.BaseObject
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#x27A1; [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') &#x27A1; EmbedAuthor  
### Example
An example of using [EmbedAuthor](EmbedAuthor 'Guilded.NET.Base.Embeds.EmbedAuthor') to display content owner:

```csharp
  
// ... Getting information about a new post...  
EmbedAuthor author = new EmbedAuthor(post.Author.Username, post.Author.Avatar, post.Url);  
Embed embed = new Embed  
{  
    Author = author,  
    Description = post.Text.Length > 4000  
    ? post.Text.Substring(0, 3997) + "..."  
    : post.Text  
};  
await client.CreateMessageAsync(channelId, new ChatEmbed(embed));  
```
### Remarks
Defines an author of the quoting message or anything else.



The [EmbedAuthor](EmbedAuthor 'Guilded.NET.Base.Embeds.EmbedAuthor') feature has following properties:

| Constructors | |
| :--- | :--- |
| [EmbedAuthor(string, Uri, Uri)](EmbedAuthor_EmbedAuthor(string_Uri_Uri) 'Guilded.NET.Base.Embeds.EmbedAuthor.EmbedAuthor(string, System.Uri, System.Uri)') | Creates a new instance of [EmbedAuthor](EmbedAuthor 'Guilded.NET.Base.Embeds.EmbedAuthor') with optional URL [url](EmbedAuthor_EmbedAuthor(string_Uri_Uri)#Guilded_NET_Base_Embeds_EmbedAuthor_EmbedAuthor(string_System_Uri_System_Uri)_url 'Guilded.NET.Base.Embeds.EmbedAuthor.EmbedAuthor(string, System.Uri, System.Uri).url').<br/> |

| Properties | |
| :--- | :--- |
| [IconUrl](EmbedAuthor_IconUrl 'Guilded.NET.Base.Embeds.EmbedAuthor.IconUrl') | The URL to author's icon.<br/> |
| [Name](EmbedAuthor_Name 'Guilded.NET.Base.Embeds.EmbedAuthor.Name') | The name of an embed author.<br/> |
| [Url](EmbedAuthor_Url 'Guilded.NET.Base.Embeds.EmbedAuthor.Url') | The URL that author links.<br/> |

#### See Also
- [EmbedFooter](EmbedFooter 'Guilded.NET.Base.Embeds.EmbedFooter')
- [EmbedProvider](EmbedProvider 'Guilded.NET.Base.Embeds.EmbedProvider')
- [EmbedField](EmbedField 'Guilded.NET.Base.Embeds.EmbedField')
- [EmbedMedia](EmbedMedia 'Guilded.NET.Base.Embeds.EmbedMedia')
