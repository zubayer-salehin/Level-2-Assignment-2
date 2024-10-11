## MongoDB Concepts - Questions and Answers

#### Question 1: What is the purpose of creating a model with an interface and schema in MongoDB? How does it help in defining the structure of a collection?

Creating a model with an interface and schema in MongoDB ensures that the data structure is consistent across the collection. The schema defines the structure, including field types and validation rules, while the interface provides type safety in TypeScript. This approach enforces a reliable and predictable data model, aiding in better data management and preventing errors.

---

#### Question 2: Explain the concept of field filtering in MongoDB. How can you specify which fields to include or exclude in the returned documents?

Field filtering in MongoDB allows you to include or exclude specific fields from the query results. You use the projection option in queries to control this by setting a field to `1` (include) or `0` (exclude). This helps reduce the amount of data transferred and optimizes query performance by returning only the necessary fields.

---

#### Question 3: What are instance methods in MongoDB models? Provide an example of a custom instance method and explain its purpose.

Instance methods are custom methods defined for individual MongoDB documents, allowing them to perform specific actions or calculations. They encapsulate logic that relates to a document’s data, making the code cleaner and more modular. These methods are useful for implementing custom behavior tied directly to a particular document.

---

#### Question 4: How do you use comparison operators like "$ne," "$gt," "$lt," "$gte," and "$lte" in MongoDB queries? Provide examples to illustrate their usage.

Comparison operators in MongoDB are used to filter documents based on specific conditions. For example, `$gt` finds values greater than a given number, while `$lt` finds values less than a number. Similarly, `$ne` filters out documents with specific values, and `$gte` and `$lte` handle "greater than or equal to" and "less than or equal to" queries, respectively.

---

#### Question 5: What are MongoDB’s “$in” and “$nin” operators? How can you use them to match values against an array of values or exclude values from a given array?

The `$in` operator matches documents where a field’s value exists in a specified array, while `$nin` excludes documents whose field value is within an array. These operators are used for efficient filtering when you need to match or exclude multiple possible values for a field. They simplify complex queries involving lists of acceptable or unacceptable values.
