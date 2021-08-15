#### [Guilded.NET.Base](Guilded_NET_Base.md 'Guilded.NET.Base')
### [Guilded.NET.Base.Permissions](Guilded_NET_Base.md#Guilded_NET_Base_Permissions 'Guilded.NET.Base.Permissions').[PermissionList](PermissionList.md 'Guilded.NET.Base.Permissions.PermissionList')
## PermissionList.Concat&lt;T&gt;(Nullable&lt;T&gt;, Nullable&lt;T&gt;) Method
Used to concat and check 2 enum values.  
```csharp
private static System.Nullable<T> Concat<T>(System.Nullable<T> first, System.Nullable<T> second)
    where T : struct, System.Enum;
```
#### Type parameters
<a name='Guilded_NET_Base_Permissions_PermissionList_Concat_T_(System_Nullable_T__System_Nullable_T_)_T'></a>
`T`  
  
#### Parameters
<a name='Guilded_NET_Base_Permissions_PermissionList_Concat_T_(System_Nullable_T__System_Nullable_T_)_first'></a>
`first` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[T](PermissionList_Concat_T_(Nullable_T__Nullable_T_).md#Guilded_NET_Base_Permissions_PermissionList_Concat_T_(System_Nullable_T__System_Nullable_T_)_T 'Guilded.NET.Base.Permissions.PermissionList.Concat&lt;T&gt;(System.Nullable&lt;T&gt;, System.Nullable&lt;T&gt;).T')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')  
First to concat
  
<a name='Guilded_NET_Base_Permissions_PermissionList_Concat_T_(System_Nullable_T__System_Nullable_T_)_second'></a>
`second` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[T](PermissionList_Concat_T_(Nullable_T__Nullable_T_).md#Guilded_NET_Base_Permissions_PermissionList_Concat_T_(System_Nullable_T__System_Nullable_T_)_T 'Guilded.NET.Base.Permissions.PermissionList.Concat&lt;T&gt;(System.Nullable&lt;T&gt;, System.Nullable&lt;T&gt;).T')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')  
Second to concat
  
#### Returns
[System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[T](PermissionList_Concat_T_(Nullable_T__Nullable_T_).md#Guilded_NET_Base_Permissions_PermissionList_Concat_T_(System_Nullable_T__System_Nullable_T_)_T 'Guilded.NET.Base.Permissions.PermissionList.Concat&lt;T&gt;(System.Nullable&lt;T&gt;, System.Nullable&lt;T&gt;).T')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')  
OR-ed enum value
