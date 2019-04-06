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
    if (!head){
      head = {value:value, next:null};
      tail = head;
      return head;
    }

    let node = head;
    while (node.next){
      node = node.next;
    }
    node.next = {value:value, next:null};
    tail = node.next;
  }

  function remove(number){
    if (number === 0){
      head = head.next;
      if (head && !head.next){
        tail = head;
      }
      return;
    }
    let index = 0;
    let node = head;
    let previousNode;
    while (node){
      if (index === number - 1){
        previousNode = node;
      }
      if (index === number){
        previousNode.next = node.next;
        if (!previousNode.next){
          tail = previousNode;
        }
        return previousNode;
      }
      if (index < number && !node.next){
        return false;
      }
      index++;
      node = node.next;
    }
    return false;
  }

  function get(number){
    if (!head){
      return false;
    }
    if (number === 0){
      return head;
    }
    let index = 0;
    let node = head;
    while (node){
      if (index === number){
        return node;
      }
      index++;
      node = node.next;
    }
    return false;
  }

  function insert(value, index){
    if (index === 0){
      return head = {value:value, next:head};
    }
    if (get(index)){
      return get(index-1).next = {value:value, next:get(index)};
    }
    return false;
  }

  return {
    getHead,
    getTail,
    add,
    remove,
    get,
    insert
  }
}