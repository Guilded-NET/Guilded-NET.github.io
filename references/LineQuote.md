
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded_NET_Base')
### [Guilded.NET.Base.Chat](Guilded_NET_Base#Guilded_NET_Base_Chat 'Guilded.NET.Base.Chat')
## LineQuote Class
A paragraph of quote block.  
```csharp
public class LineQuote : Guilded.NET.Base.Chat.ContainerNode<Guilded.NET.Base.Chat.LineQuote>
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#x27A1; [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') &#x27A1; [ChatElement](ChatElement 'Guilded.NET.Base.Chat.ChatElement') &#x27A1; [Node](Node 'Guilded.NET.Base.Chat.Node') &#x27A1; [Guilded.NET.Base.Chat.ContainerNode&lt;](ContainerNode_T_R_ 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;')[ChatElement](ChatElement 'Guilded.NET.Base.Chat.ChatElement')[,](ContainerNode_T_R_ 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;')[LineQuote](LineQuote 'Guilded.NET.Base.Chat.LineQuote')[&gt;](ContainerNode_T_R_ 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;') &#x27A1; [Guilded.NET.Base.Chat.ContainerNode&lt;](ContainerNode_T_ 'Guilded.NET.Base.Chat.ContainerNode&lt;T&gt;')[LineQuote](LineQuote 'Guilded.NET.Base.Chat.LineQuote')[&gt;](ContainerNode_T_ 'Guilded.NET.Base.Chat.ContainerNode&lt;T&gt;') &#x27A1; LineQuote  
### Example
```csharp
LineQuote line = new LineQuote("Quoted text");  
BlockQuote quote = new BlockQuote(line);  
```
### Remarks
A line in a quote block.  

| Constructors | |
| :--- | :--- |
| [LineQuote()](LineQuote_LineQuote() 'Guilded.NET.Base.Chat.LineQuote.LineQuote()') | A paragraph of quoteblock.<br/> |
| [LineQuote(ChatElement)](LineQuote_LineQuote(ChatElement) 'Guilded.NET.Base.Chat.LineQuote.LineQuote(Guilded.NET.Base.Chat.ChatElement)') | A paragraph of quoteblock.<br/> |
| [LineQuote(Leaf[])](LineQuote_LineQuote(Leaf__) 'Guilded.NET.Base.Chat.LineQuote.LineQuote(Guilded.NET.Base.Chat.Leaf[])') | A paragraph of quoteblock.<br/> |
| [LineQuote(object)](LineQuote_LineQuote(object) 'Guilded.NET.Base.Chat.LineQuote.LineQuote(object)') | A paragraph of quoteblock.<br/> |
| [LineQuote(string, Mark[])](LineQuote_LineQuote(string_Mark__) 'Guilded.NET.Base.Chat.LineQuote.LineQuote(string, Guilded.NET.Base.Chat.Mark[])') | A paragraph of quoteblock.<br/> |
| [LineQuote(string, MarkType[])](LineQuote_LineQuote(string_MarkType__) 'Guilded.NET.Base.Chat.LineQuote.LineQuote(string, Guilded.NET.Base.Chat.MarkType[])') | A paragraph of quoteblock.<br/> |
| [LineQuote(string, object[])](LineQuote_LineQuote(string_object__) 'Guilded.NET.Base.Chat.LineQuote.LineQuote(string, object[])') | A paragraph of quoteblock.<br/> |
| [LineQuote(string)](LineQuote_LineQuote(string) 'Guilded.NET.Base.Chat.LineQuote.LineQuote(string)') | A paragraph of quoteblock.<br/> |
| [LineQuote(IList&lt;ChatElement&gt;)](LineQuote_LineQuote(IList_ChatElement_) 'Guilded.NET.Base.Chat.LineQuote.LineQuote(System.Collections.Generic.IList&lt;Guilded.NET.Base.Chat.ChatElement&gt;)') | A paragraph of quoteblock.<br/> |
| [LineQuote(IFormatProvider, string, object[])](LineQuote_LineQuote(IFormatProvider_string_object__) 'Guilded.NET.Base.Chat.LineQuote.LineQuote(System.IFormatProvider, string, object[])') | A paragraph of quoteblock.<br/> |

| Methods | |
| :--- | :--- |
| [ToString()](LineQuote_ToString() 'Guilded.NET.Base.Chat.LineQuote.ToString()') | Converts quote block line to its Markdown equivalent.<br/> |

#### See Also
- [BlockQuote](BlockQuote 'Guilded.NET.Base.Chat.BlockQuote')
