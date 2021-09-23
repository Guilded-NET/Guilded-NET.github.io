
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded_NET_Base')
### [Guilded.NET.Base.Chat](Guilded_NET_Base#Guilded_NET_Base_Chat 'Guilded.NET.Base.Chat')
## Paragraph Class
A line of text in a message.  
```csharp
public class Paragraph : Guilded.NET.Base.Chat.ContainerNode<Guilded.NET.Base.Chat.Paragraph>
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#x27A1; [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') &#x27A1; [ChatElement](ChatElement 'Guilded.NET.Base.Chat.ChatElement') &#x27A1; [Node](Node 'Guilded.NET.Base.Chat.Node') &#x27A1; [Guilded.NET.Base.Chat.ContainerNode&lt;](ContainerNode_T_R_ 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;')[ChatElement](ChatElement 'Guilded.NET.Base.Chat.ChatElement')[,](ContainerNode_T_R_ 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;')[Paragraph](Paragraph 'Guilded.NET.Base.Chat.Paragraph')[&gt;](ContainerNode_T_R_ 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;') &#x27A1; [Guilded.NET.Base.Chat.ContainerNode&lt;](ContainerNode_T_ 'Guilded.NET.Base.Chat.ContainerNode&lt;T&gt;')[Paragraph](Paragraph 'Guilded.NET.Base.Chat.Paragraph')[&gt;](ContainerNode_T_ 'Guilded.NET.Base.Chat.ContainerNode&lt;T&gt;') &#x27A1; Paragraph  
### Example
Fully text-based paragraph:

```csharp
  
Paragraph para = new Paragraph("Hello!");  
```


Paragraph with mentions:

```csharp
  
Paragraph para = new Paragraph  
(  
    new TextContainer("Hello, "),  
    new MemberMention(user),  
    new TextContainer("!")  
);  
```


Simple text with formatting:

```csharp
  
Paragraph para = new Paragraph("DO NOT BREAK RULES", MarkType.Bold, MarkType.Underline);  
```


Escaping given arguments:

```csharp
  
Paragraph para = new Paragraph  
(  
    new Leaf("Invalid argument "),  
    // We do not need to escape \, *, ~, _ or | in this case,  
    // because this is not Markdown plain text  
    new Leaf(arg, MarkType.InlineCode),  
    new Leaf(".")  
);  
```


Building paragraph:

```csharp
  
Paragraph para = new Paragraph()  
    .AddText("Hello there, ")  
    .AddMention(user)  
    .AddText("!");  
```

| Constructors | |
| :--- | :--- |
| [Paragraph()](Paragraph_Paragraph() 'Guilded.NET.Base.Chat.Paragraph.Paragraph()') | A line of text in a message.<br/> |
| [Paragraph(ChatElement[])](Paragraph_Paragraph(ChatElement__) 'Guilded.NET.Base.Chat.Paragraph.Paragraph(Guilded.NET.Base.Chat.ChatElement[])') | A line of text in a message.<br/> |
| [Paragraph(Leaf[])](Paragraph_Paragraph(Leaf__) 'Guilded.NET.Base.Chat.Paragraph.Paragraph(Guilded.NET.Base.Chat.Leaf[])') | A line of text in a message.<br/> |
| [Paragraph(object)](Paragraph_Paragraph(object) 'Guilded.NET.Base.Chat.Paragraph.Paragraph(object)') | A line of text in a message.<br/> |
| [Paragraph(string, Mark[])](Paragraph_Paragraph(string_Mark__) 'Guilded.NET.Base.Chat.Paragraph.Paragraph(string, Guilded.NET.Base.Chat.Mark[])') | A line of text in a message.<br/> |
| [Paragraph(string, MarkType[])](Paragraph_Paragraph(string_MarkType__) 'Guilded.NET.Base.Chat.Paragraph.Paragraph(string, Guilded.NET.Base.Chat.MarkType[])') | A line of text in a message.<br/> |
| [Paragraph(string, object[])](Paragraph_Paragraph(string_object__) 'Guilded.NET.Base.Chat.Paragraph.Paragraph(string, object[])') | A line of text in a message.<br/> |
| [Paragraph(string)](Paragraph_Paragraph(string) 'Guilded.NET.Base.Chat.Paragraph.Paragraph(string)') | A line of text in a message.<br/> |
| [Paragraph(IList&lt;ChatElement&gt;)](Paragraph_Paragraph(IList_ChatElement_) 'Guilded.NET.Base.Chat.Paragraph.Paragraph(System.Collections.Generic.IList&lt;Guilded.NET.Base.Chat.ChatElement&gt;)') | A line of text in a message.<br/> |
| [Paragraph(IList&lt;Leaf&gt;)](Paragraph_Paragraph(IList_Leaf_) 'Guilded.NET.Base.Chat.Paragraph.Paragraph(System.Collections.Generic.IList&lt;Guilded.NET.Base.Chat.Leaf&gt;)') | A line of text in a message.<br/> |
| [Paragraph(IFormatProvider, string, object[])](Paragraph_Paragraph(IFormatProvider_string_object__) 'Guilded.NET.Base.Chat.Paragraph.Paragraph(System.IFormatProvider, string, object[])') | A line of text in a message.<br/> |

#### See Also
- [BlockQuote](BlockQuote 'Guilded.NET.Base.Chat.BlockQuote')
