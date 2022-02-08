
import react from "react";
import ReactDOM from "react-dom";
import Button from "../Dashboard";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";
import Dashboard from "../Dashboard";
import App from "../App";
import { request  } from "http";
import {rest} from 'msw'
import {setupServer} from 'msw/node'
import {render, cleanup, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'


afterEach(cleanup)
test("render without crashing" , ()=> {
    const root = document.createElement("div");
    // root.setAttribute("class", "app")
    ReactDOM.render(<App/>, root);
    expect(root.querySelector("div")?.textContent).toBe("HelloApp");
    // expect(root.querySelector("span")?.textContent).toBe("School Manager Application");
});
// describe("Api called ", () => {
//   test("fetch the data", async () => {
//     const result = Dashboard
//     console.log("DashBoard"+Dashboard);
//     // expect(result).toBeInTheDocument()
//   })
// });

test("button working" , ()=> {
    // const root = document.createElement("div");
    // root.setAttribute("class", "app")
    // ReactDOM.render(<App/>, root);
    const { getByTestId } = render(<Button />);
    expect(getByTestId("button-test")).toHaveTextContent("Manage Students");
    
});

test("all buttons" , ()=> {
    const { getByTestId, getByText, getByLabelText, getAllByTitle} = render(<Dashboard/>);

    // getByLabelText("Create New Student");
    getByText("Create New Student");
    getByTestId("button-test");
    getByTestId("span-name");
    getAllByTitle("List Student");
  
});

test("allows users to add items to their list", () =>{
    const { getByText, getByLabelText } = render(<Dashboard/>);

    const input = getByText("Create New Student");
    // fireEvent.change(input, { target:{ value: "Create a Student"}});
    fireEvent.click(getByText("Create New Student"));
});

describe("Api called ", () => {
    test("fetch the data", async () => {
      const { findByText } = render(<Dashboard/>)
      expect(await findByText('School Manager Application')).toBeInTheDocument()
    })
  });

// describe("GET / ", () => {
//     // we will use supertest to test HTTP requests/responses
//     // const request = require("supertest");
//     // we also need our app for the correct routes!
//     const app = require("../Dashboard");
//     test("It should respond with an array of students", async () => {
//       const response = await request(app).get("http://localhost:8080/subjects");
//     //   expect(response.body).toEqual(["Elie", "Matt", "Joel", "Michael"]);
//       expect(response.statusCode).toBe(200);
//     });
//   });



  // const server = setupServer(
  //   rest.get('/greeting', (req, res, ctx) => {
  //     return res(ctx.json({greeting: 'hello there'}))
  //   }),
  // )
  
  // beforeAll(() => server.listen())
  // afterEach(() => server.resetHandlers())
  // afterAll(() => server.close())
  
  // test('loads and displays greeting', async () => {
  //   render(<App url="http://localhost:8080/subjects" />)
  
  //   fireEvent.click(screen.getByText('Load Greeting'))
  
  //   await waitFor(() => screen.getByRole('heading'))
  
  //   expect(screen.getByRole('heading')).toHaveTextContent('hello there')
  //   expect(screen.getByRole('button')).toBeDisabled()
  // })


// test("allows student to delete", () =>{
//     const { getByText, getByTestId } = render(<Dashboard/>);

//     const input = getByText("Delete");
//     // fireEvent.change(input, { target:{ value: "Create a Student"}});
//     fireEvent.click(getByText("Delete"));
// });

// test("should render component" , ()=> {
//     render(<Dashboard/>);
//     const dashElement = document.createElement("div");
//     ReactDOM.render(<Button></Button>, dashElement);

// });

// it("render button correctly ", ()=> {
//     const { getByTestId } = render(<Button />);
//     expect(getByTestId("button")).toHaveTextContent("Create New Student");
// });

// it("render button correctly ", ()=> {
//     const { getByTestId } = render(<Button label="save"/>);
//     expect(getByTestId("button")).toHaveTextContent("save");
// });

it("matches snapshot 1", ()=> {
    const tree = renderer.create(<Button ></Button>).toJSON();
    expect(tree).toMatchSnapshot();
});

it("matches snapshot 2", ()=> {
    const tree = renderer.create(<Button ></Button>).toJSON();
    expect(tree).toMatchSnapshot();
});