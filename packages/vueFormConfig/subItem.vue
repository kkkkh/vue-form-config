<script>
import reg from "./reg";
export default {
  render(createElement) {
    return createElement(
      "el-form-item",
      {
        props: {
          prop: this.item.keyName,
          label: this.item.label,
          rules: this.rules
        }
      },
      [
        this.$scopedSlots[this.item.type]({
          props: this.item
        })
      ]
    );
  },
  props: {
    item: {
      type: Object
    },
    form: {
      type: Object
    }
  },
  inject: ["refValidate"],
  computed: {
    rules() {
      if (!this.item.rules) return;
      return this.item.rules.map(childItem => {
        if (childItem.type) {
          return {
            validator: this[childItem.type + "Validator"],
            trigger: childItem.trigger
          };
        } else {
          return childItem;
        }
      });
    },
    valueItem() {
      return this.item.rules.find(childItem => {
        return childItem.type === "value";
      });
    },
    regItem() {
      return this.item.rules.find(childItem => {
        return childItem.type === "reg";
      });
    },
    noDefaultItem() {
      // debugger
      return this.item.rules.find(childItem => {
        return childItem.type === "reg" && !childItem.default;
      });
    },
    defaultItem() {
      if (!this.regItem || !this.regItem.default) return;
      return reg.find(childItem => {
        return childItem.validator === this.regItem.validator;
      });
    },
    ruleItem() {
      if (this.regItem) {
        if (this.regItem.default) {
          return this.defaultItem;
        } else {
          return this.noDefaultItem;
        }
      } else {
        return null;
      }
    }
  },
  data() {
    return {};
  },
  methods: {
    regValidator(rule, value, callback) {
      //   debugger;
      // console.log(value)
      if (value.length === 0) {
        callback();
      } else if (!this.ruleItem.reg.test(value)) {
        callback(new Error(this.ruleItem.text));
      } else {
        callback();
      }
    },
    valueValidator(rule, value, callback) {
      //   debugger;
      if (
        this.valueItem.associatedSign === "=" ||
        this.valueItem.associatedSign === undefined
      ) {
        if (value !== this.form[this.valueItem.associated]) {
          callback(new Error(this.valueItem.text));
        } else {
          callback();
        }
      } else if (this.valueItem.associatedSign === "<") {
        if (this.form[this.valueItem.associated] === "" || value === "") {
          callback();
          return;
        }
        // if (!this.refValidate(this.valueItem.associated)) {
        //   callback();
        //   return;
        // }
        if (parseInt(value) < parseInt(this.form[this.valueItem.associated])) {
          callback();
        } else {
          callback(new Error(this.valueItem.text));
        }
      } else if (this.valueItem.associatedSign === ">") {
        if (this.form[this.valueItem.associated] === "" || value === "") {
          callback();
          return;
        }
        // if (!this.refValidate(this.valueItem.associated)) {
        //   callback();
        //   return;
        // }
        if (parseInt(value) > parseInt(this.form[this.valueItem.associated])) {
          callback();
        } else {
          callback(new Error(this.valueItem.text));
        }
      }
    }
  }
};
</script>

<style></style>
