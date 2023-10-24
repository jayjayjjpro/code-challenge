
Steps to run to start the blockchain:
```shell
cd src/problem5/blog

ignite chain serve
```

Steps to run after starting server:
```shell
cd blog

# Create a blog post with title hello, body world associated to creator alice
./blogd tx blog create-post hello world --from alice

# Show blog post associated with the post id: 0
./blogd q blog show-post 0

# Create a blog post by Bob
./blogd tx blog create-post foo bar --from bob

# List all blog posts with pagination
./blogd q blog list-post    

# Update a existing blog post
./blogd tx blog update-post hello cosmos 0 --from alice

# Verify that it has been updated
./blogd q blog show-post 0

# Delete a blog post
./blogd tx blog delete-post 0 --from alice

# Verify that is has beed deleted
./blogd q blog list-post
```

References: https://docs.ignite.com/guide/blog/intro
