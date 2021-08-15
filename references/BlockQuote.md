#### [Guilded.NET.Base](Guilded_NET_Base.md 'Guilded.NET.Base')
### [Guilded.NET.Base.Chat](Guilded_NET_Base.md#Guilded_NET_Base_Chat 'Guilded.NET.Base.Chat')
## BlockQuote Class
A quote of someone's text.  
```csharp
public class BlockQuote : Guilded.NET.Base.Chat.ContainerNode<Guilded.NET.Base.Chat.LineQuote, Guilded.NET.Base.Chat.BlockQuote>
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject.md 'Guilded.NET.Base.BaseObject') &#129106; [ChatElement](ChatElement.md 'Guilded.NET.Base.Chat.ChatElement') &#129106; [Node](Node.md 'Guilded.NET.Base.Chat.Node') &#129106; [Guilded.NET.Base.Chat.ContainerNode&lt;](ContainerNode_T_R_.md 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;')[LineQuote](LineQuote.md 'Guilded.NET.Base.Chat.LineQuote')[,](ContainerNode_T_R_.md 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;')[BlockQuote](BlockQuote.md 'Guilded.NET.Base.Chat.BlockQuote')[&gt;](ContainerNode_T_R_.md 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;') &#129106; BlockQuote  
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
| [BlockQuote()](BlockQuote_BlockQuote().md 'Guilded.NET.Base.Chat.BlockQuote.BlockQuote()') | A quote of someone's text.<br/> |
| [BlockQuote(LineQuote[])](BlockQuote_BlockQuote(LineQuote__).md 'Guilded.NET.Base.Chat.BlockQuote.BlockQuote(Guilded.NET.Base.Chat.LineQuote[])') | A quote of someone's text.<br/> |
| [BlockQuote(object[])](BlockQuote_BlockQuote(object__).md 'Guilded.NET.Base.Chat.BlockQuote.BlockQuote(object[])') | A quote of someone's text.<br/> |
| [BlockQuote(string, Mark[])](BlockQuote_BlockQuote(string_Mark__).md 'Guilded.NET.Base.Chat.BlockQuote.BlockQuote(string, Guilded.NET.Base.Chat.Mark[])') | A quote of someone's text.<br/> |
| [BlockQuote(string, MarkType[])](BlockQuote_BlockQuote(string_MarkType__).md 'Guilded.NET.Base.Chat.BlockQuote.BlockQuote(string, Guilded.NET.Base.Chat.MarkType[])') | A quote of someone's text.<br/> |
| [BlockQuote(string[])](BlockQuote_BlockQuote(string__).md 'Guilded.NET.Base.Chat.BlockQuote.BlockQuote(string[])') | A quote of someone's text.<br/> |
| [BlockQuote(IList&lt;LineQuote&gt;)](BlockQuote_BlockQuote(IList_LineQuote_).md 'Guilded.NET.Base.Chat.BlockQuote.BlockQuote(System.Collections.Generic.IList&lt;Guilded.NET.Base.Chat.LineQuote&gt;)') | A quote of someone's text.<br/> |
#### See Also
- [LineQuote](LineQuote.md 'Guilded.NET.Base.Chat.LineQuote')
- [Paragraph](Paragraph.md 'Guilded.NET.Base.Chat.Paragraph')
