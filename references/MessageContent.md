
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded_NET_Base')
### [Guilded.NET.Base.Chat](Guilded_NET_Base#Guilded_NET_Base_Chat 'Guilded.NET.Base.Chat')
## MessageContent Class
The contents of messages, list items, etc. based on rich text markup.  
```csharp
public class MessageContent : Guilded.NET.Base.Chat.MessageRoot<Guilded.NET.Base.Chat.MessageContent>
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#x27A1; [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') &#x27A1; [ChatElement](ChatElement 'Guilded.NET.Base.Chat.ChatElement') &#x27A1; [Guilded.NET.Base.Chat.MessageRoot&lt;](MessageRoot_T_ 'Guilded.NET.Base.Chat.MessageRoot&lt;T&gt;')[MessageContent](MessageContent 'Guilded.NET.Base.Chat.MessageContent')[&gt;](MessageRoot_T_ 'Guilded.NET.Base.Chat.MessageRoot&lt;T&gt;') &#x27A1; MessageContent  
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
    .AddParagraph("Hello there.")  
    .AddParagraph("...");  
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
| [Add(Node)](MessageContent_Add(Node) 'Guilded.NET.Base.Chat.MessageContent.Add(Guilded.NET.Base.Chat.Node)') | Adds a node to the message document.<br/> |
| [Add(IList&lt;Node&gt;)](MessageContent_Add(IList_Node_) 'Guilded.NET.Base.Chat.MessageContent.Add(System.Collections.Generic.IList&lt;Guilded.NET.Base.Chat.Node&gt;)') | Adds a list of nodes to the message document.<br/> |
| [ToString()](MessageContent_ToString() 'Guilded.NET.Base.Chat.MessageContent.ToString()') | Returns the string equivalent of the message document.<br/> |

#### See Also
- [BlockQuote](BlockQuote 'Guilded.NET.Base.Chat.BlockQuote')
- [Paragraph](Paragraph 'Guilded.NET.Base.Chat.Paragraph')
- [MarkdownText](MarkdownText 'Guilded.NET.Base.Chat.MarkdownText')
- [MessageDocument](MessageDocument 'Guilded.NET.Base.Chat.MessageDocument')
- [Node](Node 'Guilded.NET.Base.Chat.Node')
- [ContainerNode&lt;T&gt;](ContainerNode_T_ 'Guilded.NET.Base.Chat.ContainerNode&lt;T&gt;')
