/**
 * @license
 * Copyright 2024 William Masivi, sofia and Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import client from "../client.js";
import bcrypt from 'bcrypt';
const UserModel = client.user;
const userSchema = client.user;

// authenticate user with his password
export async function authenticate(
   plainText,
   hashedPassword
) {
   const isAuth = await bcrypt.compare(plainText, hashedPassword);
   return isAuth;
}
// generate a hashed password
export async function encryptPassword(password) {
   if (!password) return;
   try {
      const salt = Math.round(Math.random() * 10 + 5);
      console.log(salt);
      const hashed = await bcrypt.hash(password, salt);
      return hashed;
   } catch {
      return '';
   }
}
export function makeSalt() {
   // not working proprely it should return a random number to hashpassord according to the create time of password
   const date = new Date();
   // return Math.random(date.valueOf() * Math.random()) + ''
}
export default userSchema;