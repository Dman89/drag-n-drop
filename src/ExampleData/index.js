const data = {
  rows: [
    {
      id: "rowOne",
      components: [
        {
          id: "TestComponent",
          style: {
            color: "red"
          },
          options: {},
          order: 1,
          key: "x4g4"
        },
        {
          id: "TestComponent",
          style: {
            color: "blue"
          },
          options: {
            message: "This is the second message"
          },
          order: 2,
          key: "b4d6"
        }
      ],
      style: {
        width: "100%",
        height: "fit-content"
      }
    }
  ],
  components: {
    TestComponent: {
      id: "TestComponent",
      element: require("../Components/TestComponent").default,
      defaultStyle: {},
      defaultOptions: {},
      style: {},
      options: {}
    },
    TestComponent1: {
      id: "TestComponent1",
      element: require("../Components/TestComponent").default,
      defaultStyle: {},
      defaultOptions: {
        message: "Paragraph component"
      },
      style: {},
      options: {}
    },
    TestComponent2: {
      id: "TestComponent2",
      element: require("../Components/TestComponent2").default,
      defaultStyle: {},
      defaultOptions: {},
      style: {},
      options: {}
    }
  }
};

export default data;
