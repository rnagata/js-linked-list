/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */

function linkedListGenerator(){

  let head = null;
  let tail = null;

  function getHead(){
    return head;
  }

  function getTail(){
    return tail;
  }
  
  function add(value){
    let newNode = {
      value: value,
      next: null
    };
    if (!head){
      head = newNode;
      tail = newNode;
      return newNode;
    }
    let currentNode = head;
    while (currentNode.next){
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
    tail = newNode;
  }

  function remove(number){
    
    console.log(number);
    console.log(head);
    let node = head;
    let count = 0;
    let preceedingNode;
    let followingNode;
    while (node){
      console.log(count, node.value);
      if (count === number - 1){
        preceedingNode = node;
      }
      if (count === number + 1){
        followingNode = node;
      }
      node = node.next;
      count++;
    }
    if (followingNode){
      preceedingNode.next = followingNode;
      tail = followingNode;
      return; 
    }
    preceedingNode.next = null;
    tail = preceedingNode;
    if (number === 0){
      head = head.next;
      
    }
    console.log('end: ', head);
  }

  function get(number){
    let node = head;
    for (let i = 0; i < number; i++){
      if (!node.next){
        return false;
      }
      node = node.next;
    }
    return node;
  }

  function insert(){}

  return {
    getHead,
    getTail,
    add,
    remove,
    get,
    insert
  }
}