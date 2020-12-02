let MARKER = Number.MAX_VALUE;
const Node = (val, nodeLeft, nodeRight) => ({
  val,
  left: nodeLeft || null,
  right: nodeRight || null,
});

const serialize = (node, stream = []) => {
  if (!node) {
    stream.push(MARKER);
    return;
  }
  stream.push(node.val);
  serialize(node.left, stream);
  serialize(node.right, stream);
};

let deserialize = (stream) => {
  try {
    let data = stream.shift();
    if (data === MARKER) {
      return null;
    }

    let node = Node(data);
    node.left = deserialize(stream);
    node.right = deserialize(stream);
    return node;
  } catch (err) {
    return null;
  }
};

export { Node, deserialize, serialize };
