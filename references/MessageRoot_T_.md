
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded_NET_Base')
### [Guilded.NET.Base.Chat](Guilded_NET_Base#Guilded_NET_Base_Chat 'Guilded.NET.Base.Chat')
## MessageRoot&lt;T&gt; Class
The contents of messages, list items, etc. based on rich text markup.  
```csharp
public abstract class MessageRoot<T> : Guilded.NET.Base.Chat.ChatElement
    where T : Guilded.NET.Base.Chat.MessageRoot<T>
```

#### Type parameters
<a name='Guilded_NET_Base_Chat_MessageRoot_T__T'></a>
`T`  
  

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#x27A1; [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') &#x27A1; [ChatElement](ChatElement 'Guilded.NET.Base.Chat.ChatElement') &#x27A1; MessageRoot&lt;T&gt;  

Derived  
&#8627; [MessageContent](MessageContent 'Guilded.NET.Base.Chat.MessageContent')  
&#8627; [MessageDocument](MessageDocument 'Guilded.NET.Base.Chat.MessageDocument')  

| Constructors | |
| :--- | :--- |
| [MessageRoot(ElementType)](MessageRoot_T__MessageRoot(ElementType) 'Guilded.NET.Base.Chat.MessageRoot&lt;T&gt;.MessageRoot(Guilded.NET.Base.Chat.ElementType)') | The contents of messages, list items, etc. based on rich text markup.<br/> |

| Methods | |
| :--- | :--- |
| [Add(Node)](MessageRoot_T__Add(Node) 'Guilded.NET.Base.Chat.MessageRoot&lt;T&gt;.Add(Guilded.NET.Base.Chat.Node)') | Adds a node to the message document.<br/> |
| [Add(IList&lt;Node&gt;)](MessageRoot_T__Add(IList_Node_) 'Guilded.NET.Base.Chat.MessageRoot&lt;T&gt;.Add(System.Collections.Generic.IList&lt;Guilded.NET.Base.Chat.Node&gt;)') | Adds a list of nodes to the message document.<br/> |
| [AddImage(string)](MessageRoot_T__AddImage(string) 'Guilded.NET.Base.Chat.MessageRoot&lt;T&gt;.AddImage(string)') | Adds an image to the messsage document.<br/> |
| [AddImage(Uri)](MessageRoot_T__AddImage(Uri) 'Guilded.NET.Base.Chat.MessageRoot&lt;T&gt;.AddImage(System.Uri)') | Adds an image to the messsage document.<br/> |
| [AddMarkdown(Leaf[])](MessageRoot_T__AddMarkdown(Leaf__) 'Guilded.NET.Base.Chat.MessageRoot&lt;T&gt;.AddMarkdown(Guilded.NET.Base.Chat.Leaf[])') | Adds a Markdown plain text to the message document.<br/> |
| [AddMarkdown(TextContainer[])](MessageRoot_T__AddMarkdown(TextContainer__) 'Guilded.NET.Base.Chat.MessageRoot&lt;T&gt;.AddMarkdown(Guilded.NET.Base.Chat.TextContainer[])') | Adds a Markdown plain text to the message document.<br/> |
| [AddMarkdown(string)](MessageRoot_T__AddMarkdown(string) 'Guilded.NET.Base.Chat.MessageRoot&lt;T&gt;.AddMarkdown(string)') | Adds a Markdown plain text to the message document.<br/> |
| [AddParagraph(ChatElement[])](MessageRoot_T__AddParagraph(ChatElement__) 'Guilded.NET.Base.Chat.MessageRoot&lt;T&gt;.AddParagraph(Guilded.NET.Base.Chat.ChatElement[])') | Adds a paragraph to the message document.<br/> |
| [AddParagraph(Leaf[])](MessageRoot_T__AddParagraph(Leaf__) 'Guilded.NET.Base.Chat.MessageRoot&lt;T&gt;.AddParagraph(Guilded.NET.Base.Chat.Leaf[])') | Adds a paragraph to the message document.<br/> |
| [AddParagraph(string, Mark[])](MessageRoot_T__AddParagraph(string_Mark__) 'Guilded.NET.Base.Chat.MessageRoot&lt;T&gt;.AddParagraph(string, Guilded.NET.Base.Chat.Mark[])') | Adds a paragraph to the message document.<br/> |
| [AddParagraph(string, MarkType[])](MessageRoot_T__AddParagraph(string_MarkType__) 'Guilded.NET.Base.Chat.MessageRoot&lt;T&gt;.AddParagraph(string, Guilded.NET.Base.Chat.MarkType[])') | Adds a paragraph to the message document.<br/> |
| [AddParagraph(string)](MessageRoot_T__AddParagraph(string) 'Guilded.NET.Base.Chat.MessageRoot&lt;T&gt;.AddParagraph(string)') | Adds a paragraph to the message document.<br/> |
| [AddQuote(LineQuote[])](MessageRoot_T__AddQuote(LineQuote__) 'Guilded.NET.Base.Chat.MessageRoot&lt;T&gt;.AddQuote(Guilded.NET.Base.Chat.LineQuote[])') | Adds a block quote to the message document.<br/> |
| [AddQuote(string, Mark[])](MessageRoot_T__AddQuote(string_Mark__) 'Guilded.NET.Base.Chat.MessageRoot&lt;T&gt;.AddQuote(string, Guilded.NET.Base.Chat.Mark[])') | Adds a block quote to the message document.<br/> |
| [AddQuote(string, MarkType[])](MessageRoot_T__AddQuote(string_MarkType__) 'Guilded.NET.Base.Chat.MessageRoot&lt;T&gt;.AddQuote(string, Guilded.NET.Base.Chat.MarkType[])') | Adds a block quote to the message document.<br/> |
| [AddQuote(string[])](MessageRoot_T__AddQuote(string__) 'Guilded.NET.Base.Chat.MessageRoot&lt;T&gt;.AddQuote(string[])') | Adds a block quote to the message document.<br/> |
