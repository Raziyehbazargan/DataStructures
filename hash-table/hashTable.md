### Hash Table:

- Hashing is a common technique for storing data in such a way that the data can be inserted and retrieved very quickly.

- Hashing uses a data structure called a hash table. Although hash tables provide fast insertion, deletion, and retrieval, they perform poorly for operations that involve searching, such as finding the minimum and maximum values in a data set.

- For these operations, other data structures such as the binary search tree are more appropriate.

- hash table is just a array coupled with a function wich called Hash function.

a Hash function takes a piece of data as input called key, and outputs an integer commonly reffered to a hash value.

Hash value map our key to a particular index in the hash table.

it uses hash function to determine where in the hash-table store the given key.

later we use hash-function to determine where in the hash table to search for a given key.

hash table uses to store data in all types.

### Collison : the result of two keys hashing to the same index.

#### two common method to resovling the collison:

- linear probing : if the key hashes to the same index, it is assigned to the next available slot in the table.

in this method worst case of insertion,deletion and lookup developes to O(n).


- seprate chaining : in seprate chaning, the hash table is actually an array of pointers to linked list.
