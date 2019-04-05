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

  function remove(){

  }

  function get(number){
    currentNode = head;
    for (let i = 0; i < number; i++){
      console.log(currentNode.value);
      currentNode = currentNode.next;
      if (currentNode.next === null){
        return false;
      }
    }
    return currentNode;
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