'use strict';
// key:タスクの文字列 value:完了しているかどうかの真偽値
const tasks = new Map();

/**
 * TODOを追加する
 * @param {string} task
 */
function todo(task){
  tasks.set(task, false);
  // Map { '買い物する' => true, '勉強する' => true, '片付ける' => false }
}

/**
* タスクと完了したかどうか(真偽値)が含まれる配列を受け取り、trueのものを返す
* @param {array} taskAndIsDonePair
* @return {boolean}
*/
function isDone(taskAndIsDonePair){
  return taskAndIsDonePair[1];
}

/**
* タスクと完了したかどうか(真偽値)が含まれる配列を受け取り、falseのものを返す
* @param {array} taskAndIsDonePair
* @return {boolean}
*/
function isNotDone(taskAndIsDonePair){
  return !taskAndIsDonePair[1];
}

/**
 * TODO一覧の未完了タスクの配列を取得する
 * @return {array}
 */
function list(){
  return Array.from(tasks)
    .filter(isNotDone)
    .map(t => t[0]);
  //   Array.from(tasks); -> Mapを配列に変換
  // [ [ '買い物する', true ], [ '勉強する', true ], [ '片付ける', false ],  [ '遊ぶ', false ] ]
  //
  // function isNotDone(taskAndIsDone){
  //   return !taskAndIsDone[1];  -> 配列の要素でfalseのものを返す(falseであることをtrueとして返す)
  // };
  // Array.from(tasks).filter(isNotDone);
    // filter関数:isNotDone関数の戻り値がtrueになる配列の要素を選別し、その要素で新たな配列を作る
  // [ [ '片付ける', false ], [ '遊ぶ', false ] ]
  //
  // Array.from(tasks).filter(isNotDone).map(t => t[0]);  -> 選別した配列からタスクの文字列を取り出し、配列を作る
  // [ '片付ける', '遊ぶ' ]
}

/**
 * TODOを完了状態にする
 * @param {string} task
 */
function done(task){
  // すでにタスクが登録されていれば以下の処理をする
  if(tasks.has(task)){
    tasks.set(task, true);
  }
}

/**
 * 完了済みのタスクの一覧を取得する
 * @return {array}
 */
function donelist(){
  return Array.from(tasks).filter(isDone).map(t => t[0]);
}


/**
 * 項目を削除する
 * @param {string} task
 */
function del(task){
  tasks.delete(task);
}

module.exports = {
  todo,
  list,
  done,
  donelist,
  del
};
