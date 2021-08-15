
#### [Guilded.NET.Base](index 'index')
### [Guilded.NET.Base.Chat](index#Guilded_NET_Base_Chat 'Guilded.NET.Base.Chat')
## MessageContent Class
The contents of messages, list items, etc. based on rich text markup.  
```csharp
public class MessageContent : Guilded.NET.Base.Chat.MessageRoot<Guilded.NET.Base.Chat.MessageContent>
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') &#129106; [ChatElement](ChatElement 'Guilded.NET.Base.Chat.ChatElement') &#129106; [Guilded.NET.Base.Chat.MessageRoot&lt;](MessageRoot_T_ 'Guilded.NET.Base.Chat.MessageRoot&lt;T&gt;')[MessageContent](MessageContent 'Guilded.NET.Base.Chat.MessageContent')[&gt;](MessageRoot_T_ 'Guilded.NET.Base.Chat.MessageRoot&lt;T&gt;') &#129106; MessageContent  
### Example
Markdown text:

```csharp
  
            MesssageContent content = new MessageContent("> Quote\n\nParagraph");  
            ```


Simple nodes:

```csharp
  
            MessageContent content = new MessageContent  
            (  
                new BlockQuote(msg),  
                new Paragraph("Sorry, we cannot do that yet.")  
            );  
            ```


Building message content:

```csharp
  
            MessageContent content = new MessageContent()  
                .WithParagraph("Hello there.")  
                .WithParagraph("...");  
            ```
### Remarks
Content for messages, forum posts, etc. using rich text markup.  

| Constructors | |
| :--- | :--- |
| [MessageContent()](MessageContent_MessageContent() 'Guilded.NET.Base.Chat.MessageContent.MessageContent()') | The contents of messages, list items, etc. based on rich text markup.<br/> |
| [MessageContent(Leaf[])](MessageContent_MessageContent(Leaf__) 'Guilded.NET.Base.Chat.MessageContent.MessageContent(Guilded.NET.Base.Chat.Leaf[])') | The contents of messages, list items, etc. based on rich text markup.<br/> |
| [MessageContent(MessageDocument)](MessageContent_MessageContent(MessageDocument) 'Guilded.NET.Base.Chat.MessageContent.MessageContent(Guilded.NET.Base.Chat.MessageDocument)') | The contents of messages, list items, etc. based on rich text markup.<br/> |
| [MessageContent(Node[])](MessageContent_MessageContent(Node__) 'Guilded.NET.Base.Chat.MessageContent.MessageContent(Guilded.NET.Base.Chat.Node[])') | The contents of messages, list items, etc. based on rich text markup.<br/> |
| [MessageContent(TextContainer)](MessageContent_MessageContent(TextContainer) 'Guilded.NET.Base.Chat.MessageContent.MessageContent(Guilded.NET.Base.Chat.TextContainer)') | The contents of messages, list items, etc. based on rich text markup.<br/> |
| [MessageContent(Embed[])](MessageContent_MessageContent(Embed__) 'Guilded.NET.Base.Chat.MessageContent.MessageContent(Guilded.NET.Base.Embeds.Embed[])') | The contents of messages, list items, etc. based on rich text markup.<br/> |
| [MessageContent(object)](MessageContent_MessageContent(object) 'Guilded.NET.Base.Chat.MessageContent.MessageContent(object)') | The contents of messages, list items, etc. based on rich text markup.<br/> |
| [MessageContent(string, object[])](MessageContent_MessageContent(string_object__) 'Guilded.NET.Base.Chat.MessageContent.MessageContent(string, object[])') | The contents of messages, list items, etc. based on rich text markup.<br/> |
| [MessageContent(string)](MessageContent_MessageContent(string) 'Guilded.NET.Base.Chat.MessageContent.MessageContent(string)') | The contents of messages, list items, etc. based on rich text markup.<br/> |
| [MessageContent(IList&lt;Node&gt;)](MessageContent_MessageContent(IList_Node_) 'Guilded.NET.Base.Chat.MessageContent.MessageContent(System.Collections.Generic.IList&lt;Guilded.NET.Base.Chat.Node&gt;)') | The contents of messages, list items, etc. based on rich text markup.<br/> |
| [MessageContent(IFormatProvider, string, object[])](MessageContent_MessageContent(IFormatProvider_string_object__) 'Guilded.NET.Base.Chat.MessageContent.MessageContent(System.IFormatProvider, string, object[])') | The contents of messages, list items, etc. based on rich text markup.<br/> |

| Properties | |
| :--- | :--- |
| [Document](MessageContent_Document 'Guilded.NET.Base.Chat.MessageContent.Document') | The document containing all of the message nodes.<br/> |
| [Nodes](MessageContent_Nodes 'Guilded.NET.Base.Chat.MessageContent.Nodes') | Gets the list of nodes of the document.<br/> |

| Methods | |
| :--- | :--- |
| [ToString()](MessageContent_ToString() 'Guilded.NET.Base.Chat.MessageContent.ToString()') | Returns the string equivalent of the message document.<br/> |
| [With(Node)](MessageContent_With(Node) 'Guilded.NET.Base.Chat.MessageContent.With(Guilded.NET.Base.Chat.Node)') | Adds a node to the message document.<br/> |
| [With(IList&lt;Node&gt;)](MessageContent_With(IList_Node_) 'Guilded.NET.Base.Chat.MessageContent.With(System.Collections.Generic.IList&lt;Guilded.NET.Base.Chat.Node&gt;)') | Adds a list of nodes to the message document.<br/> |

#### See Also
- [BlockQuote](BlockQuote 'Guilded.NET.Base.Chat.BlockQuote')
- [Paragraph](Paragraph 'Guilded.NET.Base.Chat.Paragraph')
- [MarkdownText](MarkdownText 'Guilded.NET.Base.Chat.MarkdownText')
- [MessageDocument](MessageDocument 'Guilded.NET.Base.Chat.MessageDocument')
- [Node](Node 'Guilded.NET.Base.Chat.Node')
- [ContainerNode&lt;T&gt;](ContainerNode_T_ 'Guilded.NET.Base.Chat.ContainerNode&lt;T&gt;')
