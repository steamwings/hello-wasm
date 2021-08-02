use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn fibonacci(a: i32) -> i32 {
    let mut f = (0, 1);
    for _ in 0..a {
        f = (f.1, f.0 + f.1);
    } 
    return f.1;
}

// Same implementation as in JS
fn fibonacci_recursive(a: i32) -> i32 {
    match a {
        i32::MIN..=-1 => panic!("I don't know how to determine fibonacci numbers for negative inputs."),
        0 => 0,
        1 => 1,
        n => fibonacci(n - 1) + fibonacci(n - 2),
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn fib_20() {
        assert_eq!(fibonacci(20), 6765);
    }

    #[test]
    fn fib_20_rec() {
        assert_eq!(fibonacci_recursive(20), 6765);
    }
}
