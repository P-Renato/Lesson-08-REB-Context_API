# REB - 08

**PREVIOUSLY**
- Routing

**TODAY**
- Comparing local & global state
- Problems with props: "prop drilling"
- State management with the React Context API

### Local State

- Local state in React refers to data that is specific to a single component
- Local state is maintained within a component, but can be passed via props
- Local state is modified using setter functions from `useState`

    ```jsx
    const Counter = () => {
        // Typical local state
        const [count, setCount] = useState(0)

        return (
            <div>
                <p>Count: {count}</p>
                <button onClick={() => setCount(count + 1)}>Add one</button>
                <B myProp={count} />
            </div>
        )
    }
    ```

### Global State

- Global state is data that is shared by multiple components
    - Usually by all components, hence "global"
    - Kind of like global variables

- You could make any state variable global
    - Just pass it down from the root component to every single descendent
    - Sounds horrible
    - What if you have many of these global state variables?
    - Hundreds of deeply nested components?

- This is called Prop Drilling
    - Passing data down deeply nested component trees
    - Hard to maintain
    - Requires a lot of writing
    - If a component doesn't need a prop, it still has to pass it down

    ```jsx
    const App = () => {
        const data = "Hello, prop drilling!"
        // We have a component called Target that needs this data
        return <MiddleComponentA data={data} />
    }

    const MiddleComponentA = ({ data }) => {
        return <MiddleComponentB data={data} />
    }

    const MiddleComponentB = ({ data }) => {
        return <Target data={data} />
    }

    const Target = ({ data }) => {
        return <p>{data}</p>
    }
    ```

    - Here we passed "data" from "App" to Target
        - MiddleComponentA doesn't care about it, but still has to pass it down
        - MiddleComponentB doesn't care about it, but still has to pass it down

- A more realistic example

    ```jsx
    const App = () => {
        const user = getUser()
        return (
            <main>
                <Header user={user} />
                <Content />
                <Footer />
            </main>
        )
    }

    const Header = ({ user }) => {
        return (
            <header>
                <Logo />
                <Navigation />
                <UserDetails user={user} />
            </header>
        )
    }

    const UserDetails = ({ user }) => {
        return (
            <div>
                <p>Welcome {user.name}</p>
                <button>Logout</button>
            </div>
        )
    }
    ```

- Here, Header doesn't care about the user, but still has to pass it

## Context API

- The Context API React is a feature for managing shared state
- It allows state sharing without the need for prop drilling

- We have two main parts: `Provider` and `Consumer`

- `Provider`
    - This contains the state variable
    - It allows access to its state variable to any of its nested components

- `Consumer`
    - Any component that accesses the state from a Provider is a Consumer

