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
          order: 1
        },
        {
          id: "TestComponent",
          style: {
            color: "blue"
          },
          options: {
            message: "This is the second message"
          },
          order: 2
        }
      ],
      style: {
        width: "100px",
        height: "100px"
      }
    }
  ],
  components: {
    TestComponent: {
      id: "TestComponent",
      element: require("../Components/TestComponent").default,
      defaultStyle: {},
      defaultOptions: {}
    }
  }
};

export default data;
