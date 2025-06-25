### JavaScript 单链表翻转：原理与实现

在计算机科学中，链表是一种基础但非常重要的数据结构。链表翻转（Reverse Linked List）是一个经典的算法问题，常出现在技术面试和编程挑战中。本文将详细讲解如何用 JavaScript 实现单链表的翻转，并通过代码注释解释每一步的逻辑。

#### 什么是单链表？

单链表是由多个节点（Node）组成的数据结构，每个节点包含：
- 一个存储数据的 `val` 属性
- 一个指向下一个节点的 `next` 指针

链表的第一个节点称为头节点（Head），最后一个节点的 `next` 指向 `null`。

#### 链表翻转的核心思路

链表翻转的目标是将链表的方向反转，使原来的头节点变为尾节点，原来的尾节点变为头节点。例如：
```
原始链表：1 -> 2 -> 3 -> 4 -> null
翻转后：4 -> 3 -> 2 -> 1 -> null
```

实现这一目标的关键在于调整每个节点的 `next` 指针，使其指向前一个节点而非下一个节点。

#### 迭代法实现链表翻转

下面是使用迭代方法实现链表翻转的 JavaScript 代码：

```javascript
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;     // 节点存储的值
        this.next = next;   // 指向下一个节点的指针
    }
}

/**
 * 反转单链表
 * @param {ListNode} head - 链表的头节点
 * @return {ListNode} 反转后链表的头节点
 */
function reverseList(head) {
    // 初始化两个指针：prev 指向 null，curr 指向头节点
    let prev = null;
    let curr = head;
    
    // 遍历链表，直到当前节点为 null（即到达原链表尾部）
    while (curr !== null) {
        // 保存当前节点的下一个节点，防止指针丢失
        const nextTemp = curr.next;
        
        // 将当前节点的 next 指针指向前一个节点（关键反转步骤）
        curr.next = prev;
        
        // 向前移动 prev 和 curr 指针
        prev = curr;        // prev 移动到当前节点
        curr = nextTemp;    // curr 移动到之前保存的下一个节点
    }
    
    // 遍历结束后，prev 指向新的头节点（原链表的尾节点）
    return prev;
}

// 示例用法：创建链表并翻转
// 创建链表 1 -> 2 -> 3 -> 4
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);

// 翻转链表
const reversedHead = reverseList(head);

// 打印翻转后的链表
let current = reversedHead;
while (current !== null) {
    console.log(current.val);  // 依次输出 4, 3, 2, 1
    current = current.next;
}
```

#### 代码解释

1. **ListNode 类**：定义链表节点的结构，包含值 `val` 和指向下一个节点的指针 `next`。

2. **reverseList 函数**：
   - **初始化阶段**：`prev` 初始化为 `null`，`curr` 指向头节点 `head`。
   - **循环遍历阶段**：
     1. 保存当前节点的下一个节点 `nextTemp`
     2. 将当前节点的 `next` 指针反转，指向 `prev`
     3. 移动 `prev` 和 `curr` 指针一步
   - **返回结果**：当 `curr` 为 `null` 时，`prev` 即为新的头节点。

3. **示例用法**：创建一个简单的链表并调用 `reverseList` 函数进行翻转，然后打印结果验证。

#### 复杂度分析

- **时间复杂度**：O(n)，其中 n 是链表的长度。需要遍历链表一次。
- **空间复杂度**：O(1)，只需要常数级的额外空间存储指针。

#### 总结

链表翻转是一个基础但重要的算法问题，理解其原理有助于掌握指针操作和链表结构。迭代法通过调整指针方向实现翻转，是最常见的解法。在面试或实际开发中遇到链表相关问题时，这种指针操作的思路会经常用到。