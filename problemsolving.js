// // q1 : 
// class Stack {
//   constructor() {
//     this.items = [];
//   }

//   // push function
//   push(element) {
//     this.items.push(element);
//   }
//   pop() {
//     if(this.items.length == 0){
//        return 'empty';
//       }

//    return this.items.pop();
//   }

// }

// let mystack = new Stack();
// const arr = [1,2,3,4,5] ;
// for(let i = 0 ; i<  arr.length ; i++ ){
//   mystack.push(arr[i]) ;

// }
// let reversearr = '' ;
// while(mystack.items.length > 0 ){ 

//     reversearr += mystack.pop() ;

// }
// console.log(reversearr);

//q2 : Implementing a Queue Data Structure using Two Stacks .





//delet (1st stack) :
// q1 : 
// class Stack {
//   constructor() {
//     this.items = [];
//   }

//   // push function
//   push(element) {
//     this.items.push(element);
//   }
//   pop() {
//     if(this.items.length == 0){
//        return 'empty';
//       }

//    return this.items.pop();
//   }
//   printStack() {
//   console.log(this.items.join(', '));
// }


// }
// let pushstack = new Stack();
// let mystack = new Stack();
// let firststack = new Stack();


// const arr = [1,2,3,4,5] ;
// for(let i = 0 ; i<  arr.length ; i++ ){
//   mystack.push(arr[i]) ;

// }
// mystack.printStack(); 
// let reverse = '' ;
// while(mystack.items.length > 0 ){ 

//     reverse += mystack.pop() ;
// }
// console.log(reverse);

// for(let i = 0 ; i < reverse.length ; i++){
//   firststack.push(reverse[i])
// }
// firststack.printStack();

// // after i make stack to push reversed data from array i will pop 
// // it to seems like dequeue : 

// firststack.pop();
// console.log('dequeue:' );
// firststack.printStack()

// // for enqueue we use the same manipulation of push in stack 
//   pushstack.printStack(10);for(let i = 0 ; i<  arr.length ; i++ ){
//     mystack.push(pushstack) ;
  
//   }
//   pushstack.printStack();

  // q3 : Create a function to find the sum of an array of integers using recursion .  

  //  let sum=0 ;
  //   const x = [1,2,3,4,5] ;
  //   for(let i = 0 ; i <  x.length ; i++ ){
  //       sum +=  x[i];
  //   }
  //    console.log(sum);
  // function recursion(n ){
  //   if(n<1){
  //     return 'done' ;
  //   }
  //   else{let sum = 0 ;
      
  //     return recursion(n) + recursion(n-1);
  //   }
    
  // }
  // const x = [1,2,3,4,5] ;
  // recursion(x);
  function sumArray(arr, index = 0) {
    if (index >= arr.length) {
      return 0;  
    } else {
      return arr[index] + sumArray(arr, index + 1); 
    }
  }
  
  const x = [1, 2, 3, 4, 5];  
  const result = sumArray(x);
  console.log('Sum of array:', result);

  //  Create a function that takes a LinkedList and reverses it


  var head;

     class Node {
        constructor(val) {
            this.data = val;
            this.next = null;
        }
    }

    /* Function to reverse the linked list */
    function reverse(node) {
    var prev = null;
    var current = node;
    var next = null;
        while (current != null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        node = prev;
        return node;
    }

    function printList(node) {
        while (node != null) {
            document.write(node.data + " ");
            node = node.next;
        }
    }

    
        head = new Node(85);
        head.next = new Node(15);
        head.next.next = new Node(4);
        head.next.next.next = new Node(20);

        document.write("Given linked list<br/>");
        printList(head);
        head = reverse(head);
        document.write("<br/>");
        document.write("Reversed linked list<br/> ");
        printList(head);


    
 


 



