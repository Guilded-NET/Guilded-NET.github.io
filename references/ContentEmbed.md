#### [Guilded.NET.Base](Guilded_NET_Base.md 'Guilded.NET.Base')
### [Guilded.NET.Base.Chat](Guilded_NET_Base.md#Guilded_NET_Base_Chat 'Guilded.NET.Base.Chat')
## ContentEmbed Class
Block that tells information about a link.  
```csharp
public class ContentEmbed : Guilded.NET.Base.Chat.ContainerNode<Guilded.NET.Base.Chat.TextContainer, Guilded.NET.Base.Chat.ContentEmbed>
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject.md 'Guilded.NET.Base.BaseObject') &#129106; [ChatElement](ChatElement.md 'Guilded.NET.Base.Chat.ChatElement') &#129106; [Node](Node.md 'Guilded.NET.Base.Chat.Node') &#129106; [Guilded.NET.Base.Chat.ContainerNode&lt;](ContainerNode_T_R_.md 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;')[TextContainer](TextContainer.md 'Guilded.NET.Base.Chat.TextContainer')[,](ContainerNode_T_R_.md 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;')[ContentEmbed](ContentEmbed.md 'Guilded.NET.Base.Chat.ContentEmbed')[&gt;](ContainerNode_T_R_.md 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;') &#129106; ContentEmbed  
### Example
```csharp
ContentEmbed embed = new CodeContainer("https://guilded.gg/");  
```
### Remarks
A normal embed for links.  

| Constructors | |
| :--- | :--- |
| [ContentEmbed(string, TextContainer)](ContentEmbed_ContentEmbed(string_TextContainer).md 'Guilded.NET.Base.Chat.ContentEmbed.ContentEmbed(string, Guilded.NET.Base.Chat.TextContainer)') | Block that tells information about a link.<br/> |
| [ContentEmbed(string, IList&lt;TextContainer&gt;)](ContentEmbed_ContentEmbed(string_IList_TextContainer_).md 'Guilded.NET.Base.Chat.ContentEmbed.ContentEmbed(string, System.Collections.Generic.IList&lt;Guilded.NET.Base.Chat.TextContainer&gt;)') | Block that tells information about a link.<br/> |
| [ContentEmbed(string)](ContentEmbed_ContentEmbed(string).md 'Guilded.NET.Base.Chat.ContentEmbed.ContentEmbed(string)') | Block that tells information about a link.<br/> |
| [ContentEmbed(Uri, TextContainer)](ContentEmbed_ContentEmbed(Uri_TextContainer).md 'Guilded.NET.Base.Chat.ContentEmbed.ContentEmbed(System.Uri, Guilded.NET.Base.Chat.TextContainer)') | Block that tells information about a link.<br/> |
| [ContentEmbed(Uri, IList&lt;TextContainer&gt;)](ContentEmbed_ContentEmbed(Uri_IList_TextContainer_).md 'Guilded.NET.Base.Chat.ContentEmbed.ContentEmbed(System.Uri, System.Collections.Generic.IList&lt;Guilded.NET.Base.Chat.TextContainer&gt;)') | Block that tells information about a link.<br/> |
| [ContentEmbed(Uri)](ContentEmbed_ContentEmbed(Uri).md 'Guilded.NET.Base.Chat.ContentEmbed.ContentEmbed(System.Uri)') | Block that tells information about a link.<br/> |

| Properties | |
| :--- | :--- |
| [Url](ContentEmbed_Url.md 'Guilded.NET.Base.Chat.ContentEmbed.Url') | The link that the content embed references.<br/> |

| Methods | |
| :--- | :--- |
| [ToString()](ContentEmbed_ToString().md 'Guilded.NET.Base.Chat.ContentEmbed.ToString()') | Converts a content embed to its string representation<br/> |
#### See Also
- [ChatEmbed](ChatEmbed.md 'Guilded.NET.Base.Chat.ChatEmbed')
- [Embed](Embed.md 'Guilded.NET.Base.Embeds.Embed')
