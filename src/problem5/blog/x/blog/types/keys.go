package types

const (
	// ModuleName defines the module name
	ModuleName = "blog"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// RouterKey defines the module's message routing key
	RouterKey = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_blog"
	
	//Post key prefix(Newly Added)
	PostKey = "Post/value/"

	//Post Count Key(Newly Added)
        PostCountKey = "Post/count/"
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}
