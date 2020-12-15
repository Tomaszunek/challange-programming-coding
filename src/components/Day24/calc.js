const UNLOCKED = 'unlocked';
const LOCKED = 'locked';

const getParent = function (root, n, parent) {
  if (!root) return null;
  if (root.val === n) return parent;
  else {
    return getParent(root.left, n, root) || getParent(root.right, n, root);
  }
};

const Node = function (val, status) {
  return {
    val: val || null,
    status: status || UNLOCKED,
    right: null,
    left: null,
    insertLeft: function (val) {
      this.left = val;
    },
    insertRight: function (val) {
      this.right = val;
    },
    is_locked: function () {
      return this.status === LOCKED;
    },
    lock: function (root) {
      const parentIsUnlocked = !getParent(root, this.val, root).is_locked();
      const leftChildIsUnlocked =
        !this.left || (this.left && !this.left.is_locked());
      const rightChildIsUnlocked =
        !this.right || (this.right && !this.right.is_locked());
      if (parentIsUnlocked && leftChildIsUnlocked && rightChildIsUnlocked) {
        this.status = LOCKED;
        return true;
      }
      return false;
    },
    unlock: function (root) {
      const parentIsLocked = !!getParent(root, this.val, root).is_locked();
      const leftChildIsLocked =
        !this.left || (this.left && !this.left.is_locked());
      const rightChildIsLocked =
        !this.right || (this.right && !this.right.is_locked());
      if (parentIsLocked && leftChildIsLocked && rightChildIsLocked) {
        this.status = UNLOCKED;
        return true;
      }
      return false;
    },
  };
};

export { Node };
