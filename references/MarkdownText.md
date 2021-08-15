#### [Guilded.NET.Base](Guilded_NET_Base.md 'Guilded.NET.Base')
### [Guilded.NET.Base.Chat](Guilded_NET_Base.md#Guilded_NET_Base_Chat 'Guilded.NET.Base.Chat')
## MarkdownText Class
A piece of Markdown text.  
```csharp
public class MarkdownText : Guilded.NET.Base.Chat.ContainerNode<Guilded.NET.Base.Chat.TextContainer, Guilded.NET.Base.Chat.MarkdownText>
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject.md 'Guilded.NET.Base.BaseObject') &#129106; [ChatElement](ChatElement.md 'Guilded.NET.Base.Chat.ChatElement') &#129106; [Node](Node.md 'Guilded.NET.Base.Chat.Node') &#129106; [Guilded.NET.Base.Chat.ContainerNode&lt;](ContainerNode_T_R_.md 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;')[TextContainer](TextContainer.md 'Guilded.NET.Base.Chat.TextContainer')[,](ContainerNode_T_R_.md 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;')[MarkdownText](MarkdownText.md 'Guilded.NET.Base.Chat.MarkdownText')[&gt;](ContainerNode_T_R_.md 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;') &#129106; MarkdownText  
### Example
With lines(requires at least 2 strings):

```csharp
  
            MarkdownText markdown = new MarkdownText("> Quote block", "", "Paragraph here");  
            ```


Without lines:

```csharp
  
            MarkdownText markdown = new MarkdownText("> Quote Block\n\nParagraph here");  
            ```
### Remarks
A node for converting given string to Markdown.  

| Constructors | |
| :--- | :--- |
| [MarkdownText(TextContainer[])](MarkdownText_MarkdownText(TextContainer__).md 'Guilded.NET.Base.Chat.MarkdownText.MarkdownText(Guilded.NET.Base.Chat.TextContainer[])') | A piece of Markdown text.<br/> |
| [MarkdownText(object)](MarkdownText_MarkdownText(object).md 'Guilded.NET.Base.Chat.MarkdownText.MarkdownText(object)') | A piece of Markdown text.<br/> |
| [MarkdownText(string, object[])](MarkdownText_MarkdownText(string_object__).md 'Guilded.NET.Base.Chat.MarkdownText.MarkdownText(string, object[])') | A piece of Markdown text.<br/> |
| [MarkdownText(string)](MarkdownText_MarkdownText(string).md 'Guilded.NET.Base.Chat.MarkdownText.MarkdownText(string)') | A piece of Markdown text.<br/> |
| [MarkdownText(IList&lt;TextContainer&gt;)](MarkdownText_MarkdownText(IList_TextContainer_).md 'Guilded.NET.Base.Chat.MarkdownText.MarkdownText(System.Collections.Generic.IList&lt;Guilded.NET.Base.Chat.TextContainer&gt;)') | A piece of Markdown text.<br/> |
| [MarkdownText(IList&lt;string&gt;)](MarkdownText_MarkdownText(IList_string_).md 'Guilded.NET.Base.Chat.MarkdownText.MarkdownText(System.Collections.Generic.IList&lt;string&gt;)') | A piece of Markdown text.<br/> |
| [MarkdownText(IFormatProvider, string, object[])](MarkdownText_MarkdownText(IFormatProvider_string_object__).md 'Guilded.NET.Base.Chat.MarkdownText.MarkdownText(System.IFormatProvider, string, object[])') | A piece of Markdown text.<br/> |

| Methods | |
| :--- | :--- |
| [WithText(Leaf[])](MarkdownText_WithText(Leaf__).md 'Guilded.NET.Base.Chat.MarkdownText.WithText(Guilded.NET.Base.Chat.Leaf[])') | Adds a text container based on given leaves.<br/> |
| [WithText(string)](MarkdownText_WithText(string).md 'Guilded.NET.Base.Chat.MarkdownText.WithText(string)') | Adds a text container based on given string.<br/> |
#### See Also
- [Paragraph](Paragraph.md 'Guilded.NET.Base.Chat.Paragraph')
- [MessageContent](MessageContent.md 'Guilded.NET.Base.Chat.MessageContent')
