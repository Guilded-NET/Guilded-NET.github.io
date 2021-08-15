
#### [Guilded.NET.Base](index 'index')
### [Guilded.NET.Base.Chat](index#Guilded_NET_Base_Chat 'Guilded.NET.Base.Chat')
## Mark Class
A formatting of a leaf.  
```csharp
public class Mark : Guilded.NET.Base.Chat.ChatElement,
System.ICloneable
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') &#129106; [ChatElement](ChatElement 'Guilded.NET.Base.Chat.ChatElement') &#129106; Mark  

Implements [System.ICloneable](https://docs.microsoft.com/en-us/dotnet/api/System.ICloneable 'System.ICloneable')  

| Constructors | |
| :--- | :--- |
| [Mark(MarkType, Dictionary&lt;string,object&gt;)](Mark_Mark(MarkType_Dictionary_string_object_) 'Guilded.NET.Base.Chat.Mark.Mark(Guilded.NET.Base.Chat.MarkType, System.Collections.Generic.Dictionary&lt;string,object&gt;)') | Creates a new formatting [Mark](Mark 'Guilded.NET.Base.Chat.Mark') based on given [MarkType](MarkType 'Guilded.NET.Base.Chat.MarkType').<br/> |
| [Mark(MarkType)](Mark_Mark(MarkType) 'Guilded.NET.Base.Chat.Mark.Mark(Guilded.NET.Base.Chat.MarkType)') | Creates a new formatting [Mark](Mark 'Guilded.NET.Base.Chat.Mark') based on given [MarkType](MarkType 'Guilded.NET.Base.Chat.MarkType').<br/> |

| Properties | |
| :--- | :--- |
| [Data](Mark_Data 'Guilded.NET.Base.Chat.Mark.Data') | The data of the formatting.<br/> |
| [Type](Mark_Type 'Guilded.NET.Base.Chat.Mark.Type') | The type of the formatting.<br/> |

| Methods | |
| :--- | :--- |
| [Clone()](Mark_Clone() 'Guilded.NET.Base.Chat.Mark.Clone()') | Creates a new mark with similar properties.<br/> |
| [ToString()](Mark_ToString() 'Guilded.NET.Base.Chat.Mark.ToString()') | Returns this mark's formatting prefix/postfix.<br/> |

#### See Also
- [TextContainer](TextContainer 'Guilded.NET.Base.Chat.TextContainer')
- [Leaf](Leaf 'Guilded.NET.Base.Chat.Leaf')
- [MarkType](MarkType 'Guilded.NET.Base.Chat.MarkType')
