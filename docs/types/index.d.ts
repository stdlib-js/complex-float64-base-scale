/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { Complex128 } from '@stdlib/types/complex';
import { Collection, NumericArray } from '@stdlib/types/array';

/**
* Interface for scaling a double-precision complex floating-point number.
*/
interface Scale {
	/**
	* Scales a double-precision complex floating-point number by a real-valued double-precision floating-point scalar constant.
	*
	* @param alpha - scalar constant
	* @param z - complex number
	* @returns result
	*
	* @example
	* var Complex128 = require( '@stdlib/complex-float64-ctor' );
	* var real = require( '@stdlib/complex-float64-real' );
	* var imag = require( '@stdlib/complex-float64-imag' );
	*
	* var z = new Complex128( 5.0, 3.0 );
	* // returns <Complex128>
	*
	* var out = scale( 5.0, z );
	* // returns <Complex128>
	*
	* var re = real( out );
	* // returns 25.0
	*
	* var im = imag( out );
	* // returns 15.0
	*/
	( alpha: number, z: Complex128 ): Complex128;

	/**
	* Scales a double-precision complex floating-point number by a real-valued double-precision floating-point scalar constant and assigns results to a provided output array.
	*
	* @param alpha - scalar constant
	* @param re - real component of the complex number
	* @param im - imaginary component of the complex number
	* @param out - output array
	* @param strideOut - stride length
	* @param offsetOut - starting index
	* @returns output array
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var out = new Float64Array( 2 );
	* var v = scale.assign( 5.0, 5.0, 3.0, out, 1, 0 );
	* // returns <Float64Array>[ 25.0, 15.0 ]
	*
	* var bool = ( out === v );
	* // returns true
	*/
	assign<T extends NumericArray | Collection<number>>( alpha: number, re: number, im: number, out: T, strideOut: number, offsetOut: number ): T;

	/**
	* Scales a double-precision complex floating-point number stored in a real-valued strided array view by a real-valued double-precision floating-point scalar constant and assigns results to a provided strided output array.
	*
	* @param alpha - scalar constant
	* @param z - complex number view
	* @param strideZ - stride length for `z`
	* @param offsetZ - starting index for `z`
	* @param out - output array
	* @param strideOut - stride length for `out`
	* @param offsetOut - starting index for `out`
	* @returns output array
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var z = new Float64Array( [ 5.0, 3.0 ] );
	*
	* var out = scale.strided( 5.0, z, 1, 0, new Float64Array( 2 ), 1, 0 );
	* // returns <Float64Array>[ 25.0, 15.0 ]
	*/
	strided<T extends NumericArray | Collection<number>, U extends NumericArray | Collection<number>>( alpha: number, z: T, strideZ: number, offsetZ: number, out: U, strideOut: number, offsetOut: number ): U;
}

/**
* Scales a double-precision complex floating-point number by a real-valued double-precision floating-point scalar constant.
*
* @param alpha - scalar constant
* @param z - complex number
* @returns result
*
* @example
* var Complex128 = require( '@stdlib/complex-float64-ctor' );
* var real = require( '@stdlib/complex-float64-real' );
* var imag = require( '@stdlib/complex-float64-imag' );
*
* var z = new Complex128( 5.0, 3.0 );
* // returns <Complex128>
*
* var out = scale( 5.0, z );
* // returns <Complex128>
*
* var re = real( out );
* // returns 25.0
*
* var im = imag( out );
* // returns 15.0
*
* @example
* var Float64Array = require( '@stdlib/array-float64' );
*
* var out = new Float64Array( 2 );
* var v = scale.assign( 5.0, 5.0, 3.0, out, 1, 0 );
* // returns <Float64Array>[ 25.0, 15.0 ]
*
* var bool = ( out === v );
* // returns true
*
* @example
* var Float64Array = require( '@stdlib/array-float64' );
*
* var z = new Float64Array( [ 5.0, 3.0 ] );
*
* var out = scale.strided( 5.0, z, 1, 0, new Float64Array( 2 ), 1, 0 );
* // returns <Float64Array>[ 25.0, 15.0 ]
*/
declare var scale: Scale;


// EXPORTS //

export = scale;
