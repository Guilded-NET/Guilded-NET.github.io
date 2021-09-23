
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded_NET_Base')
### [Guilded.NET.Base.Chat](Guilded_NET_Base#Guilded_NET_Base_Chat 'Guilded.NET.Base.Chat')
## BlockQuote Class
A quote of someone's text.  
```csharp
public class BlockQuote : Guilded.NET.Base.Chat.ContainerNode<Guilded.NET.Base.Chat.LineQuote, Guilded.NET.Base.Chat.BlockQuote>
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#x27A1; [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') &#x27A1; [ChatElement](ChatElement 'Guilded.NET.Base.Chat.ChatElement') &#x27A1; [Node](Node 'Guilded.NET.Base.Chat.Node') &#x27A1; [Guilded.NET.Base.Chat.ContainerNode&lt;](ContainerNode_T_R_ 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;')[LineQuote](LineQuote 'Guilded.NET.Base.Chat.LineQuote')[,](ContainerNode_T_R_ 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;')[BlockQuote](BlockQuote 'Guilded.NET.Base.Chat.BlockQuote')[&gt;](ContainerNode_T_R_ 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;') &#x27A1; BlockQuote  
### Example
Quote block with strings:

```csharp
  
BlockQuote quote = new BlockQuote("Quote line #1", "Quote line #2");  
```


Quote block with quote lines:

```csharp
  
BlockQuote quote = new BlockQuote  
(  
    new LineQuote("Quote line #1"),  
    new LineQuote("Quote line #2")  
);  
```

| Constructors | |
| :--- | :--- |
| [BlockQuote()](BlockQuote_BlockQuote() 'Guilded.NET.Base.Chat.BlockQuote.BlockQuote()') | A quote of someone's text.<br/> |
| [BlockQuote(LineQuote[])](BlockQuote_BlockQuote(LineQuote__) 'Guilded.NET.Base.Chat.BlockQuote.BlockQuote(Guilded.NET.Base.Chat.LineQuote[])') | A quote of someone's text.<br/> |
| [BlockQuote(object[])](BlockQuote_BlockQuote(object__) 'Guilded.NET.Base.Chat.BlockQuote.BlockQuote(object[])') | A quote of someone's text.<br/> |
| [BlockQuote(string, Mark[])](BlockQuote_BlockQuote(string_Mark__) 'Guilded.NET.Base.Chat.BlockQuote.BlockQuote(string, Guilded.NET.Base.Chat.Mark[])') | A quote of someone's text.<br/> |
| [BlockQuote(string, MarkType[])](BlockQuote_BlockQuote(string_MarkType__) 'Guilded.NET.Base.Chat.BlockQuote.BlockQuote(string, Guilded.NET.Base.Chat.MarkType[])') | A quote of someone's text.<br/> |
| [BlockQuote(string[])](BlockQuote_BlockQuote(string__) 'Guilded.NET.Base.Chat.BlockQuote.BlockQuote(string[])') | A quote of someone's text.<br/> |
| [BlockQuote(IList&lt;LineQuote&gt;)](BlockQuote_BlockQuote(IList_LineQuote_) 'Guilded.NET.Base.Chat.BlockQuote.BlockQuote(System.Collections.Generic.IList&lt;Guilded.NET.Base.Chat.LineQuote&gt;)') | A quote of someone's text.<br/> |

#### See Also
- [LineQuote](LineQuote 'Guilded.NET.Base.Chat.LineQuote')
- [Paragraph](Paragraph 'Guilded.NET.Base.Chat.Paragraph')
