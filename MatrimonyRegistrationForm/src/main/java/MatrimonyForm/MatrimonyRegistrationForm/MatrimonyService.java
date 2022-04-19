package MatrimonyForm.MatrimonyRegistrationForm;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class MatrimonyService 
{
	@Autowired
	MatrimonyRepository repo;
	public Matrimony create(Matrimony mat)
	{
		return repo.save(mat);
	}
	public List<Matrimony> list()
	{
		return (List<Matrimony>)repo.findAll();
	}
	public Optional<Matrimony> reads (int padi)
	{
		return repo.findById(padi);
	}
	public String remove(int open)
	{
		String nm=repo.findById(open).orElse(new Matrimony()).getMatFname()+"has deleted successfully";
		repo.deleteById(open);
		return nm;
	}
}
