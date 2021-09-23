
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded_NET_Base')
### [Guilded.NET.Base.Embeds](Guilded_NET_Base#Guilded_NET_Base_Embeds 'Guilded.NET.Base.Embeds')
## EmbedFooter Class
The footer of an embed.  
```csharp
public class EmbedFooter : Guilded.NET.Base.BaseObject
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#x27A1; [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') &#x27A1; EmbedFooter  
### Remarks
The bottom area of an embed that provides further information about anything.



Footers can also have timestamps, but that can be used by setting [Timestamp](Embed_Timestamp 'Guilded.NET.Base.Embeds.Embed.Timestamp') property. Timestamps are  
not officially part of footers, but that's the most common way they are displayed by the clients and official Guilded app.

| Constructors | |
| :--- | :--- |
| [EmbedFooter(string, Uri)](EmbedFooter_EmbedFooter(string_Uri) 'Guilded.NET.Base.Embeds.EmbedFooter.EmbedFooter(string, System.Uri)') | Creates a new instance of [EmbedFooter](EmbedFooter 'Guilded.NET.Base.Embeds.EmbedFooter') with text [text](EmbedFooter_EmbedFooter(string_Uri)#Guilded_NET_Base_Embeds_EmbedFooter_EmbedFooter(string_System_Uri)_text 'Guilded.NET.Base.Embeds.EmbedFooter.EmbedFooter(string, System.Uri).text').<br/> |

| Properties | |
| :--- | :--- |
| [IconUrl](EmbedFooter_IconUrl 'Guilded.NET.Base.Embeds.EmbedFooter.IconUrl') | The source URL of footer's icon.<br/> |
| [Text](EmbedFooter_Text 'Guilded.NET.Base.Embeds.EmbedFooter.Text') | The description of the footer.<br/> |

#### See Also
- [EmbedProvider](EmbedProvider 'Guilded.NET.Base.Embeds.EmbedProvider')
- [EmbedAuthor](EmbedAuthor 'Guilded.NET.Base.Embeds.EmbedAuthor')
- [EmbedField](EmbedField 'Guilded.NET.Base.Embeds.EmbedField')
- [EmbedMedia](EmbedMedia 'Guilded.NET.Base.Embeds.EmbedMedia')
