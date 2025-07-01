# Lesson-08-REB-Context_API

**PREVIOUSLY**



## Local State

- Local state in React refers to data that is specific to a single component
- Local state is maintained within a component, but can be passed via props
- Local state is modified using setter functions from `useState`

    ```jsx
    const Counter = () => {
        //Typical local state
        const [count, setCount] = useState(0)

        return (
            <div>
                <p>Count: {count}</p>
                <button onClick={() =>setCount(count + 1)}>Add one</button>
                <A myProp={count} />
            </div>
        )
    }
    ```

    ### Global State

    - Global state is data that is shared by multiple components
        - Usually by all components, hence 'global'
        - Kind of like global variables

    - You could make any state variable global
        - Just pass it down from the root component to every single descendent
        - Sounds horrible
        - What if you have many of these global state variables?
        - 
