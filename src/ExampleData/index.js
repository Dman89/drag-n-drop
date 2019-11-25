const data = {
  rows: [
    {
      id: "rowOne",
      components: [],
      style: {
        width: "100%",
        height: "fit-content",
        marginBottom: "15px"
      }
    },
    {
      id: "rowTwo",
      components: [],
      style: {
        width: "100%",
        height: "fit-content",
        marginBottom: "15px"
      }
    },
    {
      id: "rowThree",
      components: [],
      style: {
        width: "100%",
        height: "fit-content",
        marginBottom: "15px"
      }
    }
  ],
  components: {
    TestComponent2: {
      id: "TestComponent2",
      element: require("../Components/TestComponent2").default,
      defaultStyle: {},
      defaultOptions: {},
      style: {},
      options: {}
    },
    TestComponent1: {
      id: "TestComponent1",
      element: require("../Components/TestComponent").default,
      defaultStyle: {
        marginBottom: "15px"
      },
      defaultOptions: {
        message: "Paragraph component"
      },
      style: {},
      options: {}
    }
  }
};

export default data;
