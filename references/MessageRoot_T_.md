
#### [Guilded.NET.Base](index 'index')
### [Guilded.NET.Base.Chat](index#Guilded_NET_Base_Chat 'Guilded.NET.Base.Chat')
## MessageRoot&lt;T&gt; Class
The contents of messages, list items, etc. based on rich text markup.  
```csharp
public abstract class MessageRoot<T> : Guilded.NET.Base.Chat.ChatElement
    where T : Guilded.NET.Base.Chat.MessageRoot<T>
```

#### Type parameters
<a name='Guilded_NET_Base_Chat_MessageRoot_T__T'></a>
`T`  
  

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') &#129106; [ChatElement](ChatElement 'Guilded.NET.Base.Chat.ChatElement') &#129106; MessageRoot&lt;T&gt;  

Derived  
&#8627; [MessageContent](MessageContent 'Guilded.NET.Base.Chat.MessageContent')  
&#8627; [MessageDocument](MessageDocument 'Guilded.NET.Base.Chat.MessageDocument')  

| Constructors | |
| :--- | :--- |
| [MessageRoot(ElementType)](MessageRoot_T__MessageRoot(ElementType) 'Guilded.NET.Base.Chat.MessageRoot&lt;T&gt;.MessageRoot(Guilded.NET.Base.Chat.ElementType)') | The contents of messages, list items, etc. based on rich text markup.<br/> |

| Methods | |
| :--- | :--- |
| [With(Node)](MessageRoot_T__With(Node) 'Guilded.NET.Base.Chat.MessageRoot&lt;T&gt;.With(Guilded.NET.Base.Chat.Node)') | Adds a node to the message document.<br/> |
| [With(IList&lt;Node&gt;)](MessageRoot_T__With(IList_Node_) 'Guilded.NET.Base.Chat.MessageRoot&lt;T&gt;.With(System.Collections.Generic.IList&lt;Guilded.NET.Base.Chat.Node&gt;)') | Adds a list of nodes to the message document.<br/> |
| [WithImage(string)](MessageRoot_T__WithImage(string) 'Guilded.NET.Base.Chat.MessageRoot&lt;T&gt;.WithImage(string)') | Adds an image to the messsage document.<br/> |
| [WithImage(Uri)](MessageRoot_T__WithImage(Uri) 'Guilded.NET.Base.Chat.MessageRoot&lt;T&gt;.WithImage(System.Uri)') | Adds an image to the messsage document.<br/> |
| [WithMarkdown(Leaf[])](MessageRoot_T__WithMarkdown(Leaf__) 'Guilded.NET.Base.Chat.MessageRoot&lt;T&gt;.WithMarkdown(Guilded.NET.Base.Chat.Leaf[])') | Adds a Markdown plain text to the message document.<br/> |
| [WithMarkdown(TextContainer[])](MessageRoot_T__WithMarkdown(TextContainer__) 'Guilded.NET.Base.Chat.MessageRoot&lt;T&gt;.WithMarkdown(Guilded.NET.Base.Chat.TextContainer[])') | Adds a Markdown plain text to the message document.<br/> |
| [WithMarkdown(string)](MessageRoot_T__WithMarkdown(string) 'Guilded.NET.Base.Chat.MessageRoot&lt;T&gt;.WithMarkdown(string)') | Adds a Markdown plain text to the message document.<br/> |
| [WithParagraph(ChatElement[])](MessageRoot_T__WithParagraph(ChatElement__) 'Guilded.NET.Base.Chat.MessageRoot&lt;T&gt;.WithParagraph(Guilded.NET.Base.Chat.ChatElement[])') | Adds a paragraph to the message document.<br/> |
| [WithParagraph(Leaf[])](MessageRoot_T__WithParagraph(Leaf__) 'Guilded.NET.Base.Chat.MessageRoot&lt;T&gt;.WithParagraph(Guilded.NET.Base.Chat.Leaf[])') | Adds a paragraph to the message document.<br/> |
| [WithParagraph(string, Mark[])](MessageRoot_T__WithParagraph(string_Mark__) 'Guilded.NET.Base.Chat.MessageRoot&lt;T&gt;.WithParagraph(string, Guilded.NET.Base.Chat.Mark[])') | Adds a paragraph to the message document.<br/> |
| [WithParagraph(string, MarkType[])](MessageRoot_T__WithParagraph(string_MarkType__) 'Guilded.NET.Base.Chat.MessageRoot&lt;T&gt;.WithParagraph(string, Guilded.NET.Base.Chat.MarkType[])') | Adds a paragraph to the message document.<br/> |
| [WithParagraph(string)](MessageRoot_T__WithParagraph(string) 'Guilded.NET.Base.Chat.MessageRoot&lt;T&gt;.WithParagraph(string)') | Adds a paragraph to the message document.<br/> |
| [WithQuote(LineQuote[])](MessageRoot_T__WithQuote(LineQuote__) 'Guilded.NET.Base.Chat.MessageRoot&lt;T&gt;.WithQuote(Guilded.NET.Base.Chat.LineQuote[])') | Adds a block quote to the message document.<br/> |
| [WithQuote(string, Mark[])](MessageRoot_T__WithQuote(string_Mark__) 'Guilded.NET.Base.Chat.MessageRoot&lt;T&gt;.WithQuote(string, Guilded.NET.Base.Chat.Mark[])') | Adds a block quote to the message document.<br/> |
| [WithQuote(string, MarkType[])](MessageRoot_T__WithQuote(string_MarkType__) 'Guilded.NET.Base.Chat.MessageRoot&lt;T&gt;.WithQuote(string, Guilded.NET.Base.Chat.MarkType[])') | Adds a block quote to the message document.<br/> |
| [WithQuote(string[])](MessageRoot_T__WithQuote(string__) 'Guilded.NET.Base.Chat.MessageRoot&lt;T&gt;.WithQuote(string[])') | Adds a block quote to the message document.<br/> |
