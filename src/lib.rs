extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn fibonacci(a: i32) -> i32 {
    match a {
        i32::MIN..=-1 => panic!("I don't know how to determine fibonacci numbers for negative inputs."),
        0 => 0,
        1 => 1,
        n => fibonacci(n - 1) + fibonacci(n - 2),
    }
}

#[cfg(test)]
mod tests {
    #[test]
    fn fib_20() {
        assert_eq!(fibonacci(20), 6765);
    }
}
